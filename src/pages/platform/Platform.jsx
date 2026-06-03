import "./platform.css";
import { useState } from "react";
import banner from "../../assets/platform.png";
import onsitescene1 from "../../assets/platform1.png";
import offsitescene1 from "../../assets/platform2.png";
import p4 from "../../assets/platform4.png";
import CTA from "../../components/sections/CTA";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

/* ── HERO SECTION ── */

/* ── HERO ── */
function Hero() {
  return (
    <div className="hero-wrap">
      <div className="hero">
        <div>
          <div className="hero-badge">Platform Tour</div>
          <h1 className="hero-h1">See MoveLogic AI <br /><em> in action.</em></h1>
          <p className="hero-p">Explore the platform workflow from survey creation to AI inventory detection, estimator review, and customer estimate sharing.</p>
          <div className="hero-btns">
              <NavLink to="/bookademo" className="btn-hero-acc">
                 Book a Demo →
              </NavLink>
              <NavLink to="/" className="btn-hero-out">
                 View Workflow ↓
              </NavLink> 
          </div>
          <div className="hero-sub-pills">
            {[
              {icon:"◎",title:"No login required",sub:"Just a guided tour"},
              {icon:"🖥",title:"Product preview",sub:"screens"},
              {icon:"✓",title:"See in minutes",sub:"Full platform preview"},
            ].map(({icon,title,sub})=>(
              <div key={title} className="hero-sub-pill">
                <div className="sub-pill-ico">{icon}</div>
                <div>
                  <span className="sub-pill-title">{title}</span>
                  <span className="sub-pill-sub">{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
        <div className="dashboard-preview1">
            <img src={banner} alt="MoveLogic Dashboard Banner" className="" />
        </div> 
        </div>
      </div>
    </div>
  );
}

/* ── ONSITE SCENE ── */
function OnSiteScene() {
  return (
    <div className="wf-photo">
          <img src={onsitescene1} alt="OnSite" /> 
    </div>
  );
}

/* ── REMOTE SCENE ── */
function RemoteScene() {
  return (
    <div className="wf-photo">
          <img src={offsitescene1} alt="OffSite" /> 
    </div>
  );
}

/* ── WORKFLOW CHOICE ── */
function WorkflowChoice() {
  return (
    <div className="workflow-wrap">
      <div className="workflow">
        <h2 className=" section-title mb-4">Choose the workflow that fits your business</h2>
        <div className="wf-cards">
          {[
            {
              icon:"👤", title:"On-site Survey",
              desc:"Your estimator visits the customer, captures photos on-site, and reviews AI-detected inventory instantly.",
              checks:["Perfect for complex moves","Instant AI analysis on-site","Face-to-face customer interaction"],
              Scene: OnSiteScene,
            },
            {
              icon:"🔗", title:"Remote AI Survey",
              desc:"Send a secure link to your customer. They upload photos from their phone and AI prepares everything for your review.",
              checks:["Great for long-distance moves","Customer uploads at their convenience","Save time and reduce travel"],
              Scene: RemoteScene,
            },
          ].map(({icon,title,desc,checks,Scene})=>(
            <div key={title} className="wf-card">
              <div className="wf-card-top">
                <div className="wf-icon">{icon}</div>
                <div className="wf-info">
                  <div className="wf-title">{title}</div>
                  <div className="wf-desc">{desc}</div>
                  <div className="wf-checks">
                    {checks.map(c=>(
                      <div key={c} className="wf-check">
                        <span className="wf-check-ico">✓</span>{c}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Scene />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── CREATE SURVEY FORM ── */
function CreateSurveyForm() {
  const [surveyType, setSurveyType] = useState("remote");
  const [visType, setVisType] = useState("full");
  return (
    <div className="sc-layout">
      <div className="sc-left">
        <div className="sc-left-title">Create Survey</div>
        <div className="sc-left-desc">Start a new survey in just a few clicks.</div>
        <div className="sc-checks">
          {["Add customer and move details","Choose survey type\n(On-site or Remote)","Set estimate visibility\nand permissions","Save and create instantly"].map(c=>(
            <div key={c} className="sc-check">
              <span className="sc-check-ico">✓</span>
              <span style={{whiteSpace:"pre-line"}}>{c}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="form-mock">
         <img src={p4} alt="MoveLogic" className="" />
         
      </div>
    </div>
  );
}

/* ── SEND LINK STEP ── */
function SendLinkStep() {
  return (
    <div className="sc-layout">
      <div className="sc-left">
        <div className="sc-left-title">Send Secure Link</div>
        <div className="sc-left-desc">Share a unique survey link with your customer instantly.</div>
        <div className="sc-checks">
          {["One-click link generation","Send via Email, SMS or WhatsApp","Link expires after completion","Track link open status"].map(c=>(
            <div key={c} className="sc-check"><span className="sc-check-ico">✓</span>{c}</div>
          ))}
        </div>
      </div>
      <div style={{padding:24,display:"flex",flexDirection:"column",gap:16}}>
        <div style={{background:"var(--bg3)",border:"1px solid var(--border)",borderRadius:10,padding:16}}>
          <div style={{fontSize:11,fontWeight:700,marginBottom:10}}>Survey Link Ready</div>
          <div style={{display:"flex",gap:8,alignItems:"center",background:"var(--bg2)",border:"1px solid var(--borderB)",borderRadius:7,padding:"8px 12px",marginBottom:12}}>
            <span style={{flex:1,fontSize:11,color:"var(--acc)",fontFamily:"monospace"}}>https://survey.movelogic.ai/s/SRV-2418</span>
            <button style={{background:"var(--acc)",color:"#000",border:"none",borderRadius:5,padding:"4px 10px",fontSize:10,fontWeight:700,cursor:"pointer"}}>Copy</button>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8}}>
            {[["✉","Email"],["💬","WhatsApp"],["📱","SMS"],["🔗","Copy Link"]].map(([ic,lb])=>(
              <div key={lb} style={{background:"var(--bg2)",border:"1px solid var(--border)",borderRadius:7,padding:"10px 6px",display:"flex",flexDirection:"column",alignItems:"center",gap:4,cursor:"pointer"}}>
                <span style={{fontSize:18}}>{ic}</span>
                <span style={{fontSize:10,color:"var(--txt2)"}}>{lb}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{background:"var(--bg3)",border:"1px solid var(--border)",borderRadius:10,padding:14}}>
          <div style={{fontSize:11,fontWeight:700,marginBottom:8,color:"var(--txt2)"}}>Link Status</div>
          {[["Sent","14:32 today","var(--green)"],["Opened","14:35 today","var(--acc)"],["Upload Started","14:40 today","var(--yellow)"]].map(([s,t,c])=>(
            <div key={s} style={{display:"flex",justifyContent:"space-between",padding:"4px 0",fontSize:11,borderBottom:"1px solid rgba(255,255,255,.04)"}}>
              <span style={{color:`${c}`}}>● {s}</span>
              <span style={{color:"var(--txt3)"}}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── CUSTOMER UPLOAD STEP ── */
function CustomerUploadStep() {
  return (
    <div className="sc-layout">
      <div className="sc-left">
        <div className="sc-left-title">Customer Upload</div>
        <div className="sc-left-desc">Customers complete the survey from any device, guided step by step.</div>
        <div className="sc-checks">
          {["Works on any smartphone","Step-by-step guidance","AI prompts for best angles","Progress saved automatically"].map(c=>(
            <div key={c} className="sc-check"><span className="sc-check-ico">✓</span>{c}</div>
          ))}
        </div>
      </div>
      <div style={{padding:24,display:"flex",gap:16,alignItems:"flex-start"}}>
        <div style={{background:"var(--bg3)",border:"1px solid var(--border)",borderRadius:10,padding:14,flex:1}}>
          <div style={{fontSize:11,fontWeight:700,marginBottom:10}}>Upload Progress</div>
          {[["Living Room","6/6 photos","100%","var(--green)"],["Kitchen","4/4 photos","100%","var(--green)"],["Bedroom 1","3/6 photos","50%","var(--acc)"],["Bedroom 2","0/4 photos","0%","var(--txt3)"]].map(([r,c,p,col])=>(
            <div key={r} style={{marginBottom:10}}>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:11,marginBottom:4}}>
                <span style={{color:"var(--txt2)"}}>{r}</span>
                <span style={{color:col,fontSize:10}}>{c}</span>
              </div>
              <div style={{height:5,background:"var(--bg4)",borderRadius:3,overflow:"hidden"}}>
                <div style={{height:"100%",width:p,background:col==="var(--green)"?"var(--green)":col==="var(--acc)"?"var(--acc)":"var(--txt3)",borderRadius:3,transition:"width .3s"}}/>
              </div>
            </div>
          ))}
          <div style={{marginTop:12,padding:"8px 10px",background:"rgba(0,200,240,0.06)",border:"1px solid var(--borderB)",borderRadius:7,fontSize:10,color:"var(--acc)",textAlign:"center"}}>Overall: 74% Complete</div>
        </div>
        <div style={{width:120,background:"var(--bg3)",border:"1px solid var(--border)",borderRadius:10,overflow:"hidden"}}>
          <div style={{background:"var(--bg2)",padding:"7px 10px",fontSize:10,fontWeight:600}}>Preview</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:2,padding:6}}>
            {[0,1,2,3,4,5].map(i=>(
              <div key={i} style={{aspectRatio:"1",background:`rgba(0,200,240,${0.04+i*0.02})`,border:"1px solid rgba(0,200,240,0.1)",borderRadius:3,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,color:"var(--txt3)"}}>
                {i<3?"✓":""}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── AI DETECTION STEP ── */
function AIDetectionStep() {
  return (
    <div className="sc-layout">
      <div className="sc-left">
        <div className="sc-left-title">AI Detection Workspace</div>
        <div className="sc-left-desc">Review AI-detected items, adjust if needed, and add missing details.</div>
        <div className="sc-checks">
          {["Items detected automatically","Volume calculated per room","Challenges flagged in real-time","Human review and editing"].map(c=>(
            <div key={c} className="sc-check"><span className="sc-check-ico">✓</span>{c}</div>
          ))}
        </div>
      </div>
      <div style={{padding:24,display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
        {/* Detection panel */}
        <div style={{background:"var(--bg3)",border:"1px solid var(--border)",borderRadius:10,padding:14}}>
          <div style={{fontSize:11,fontWeight:700,marginBottom:10}}>Detected Items (126)</div>
          {[["Sofa","Living Room","1.2 m³","✓"],["TV Unit","Living Room","0.3 m³","✓"],["Coffee Table","Living Room","0.2 m³","✓"],["Armchair","Living Room","0.4 m³","✓"],["Dining Table","Dining Room","0.8 m³","✓"]].map(([n,r,v,s])=>(
            <div key={n} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 0",borderBottom:"1px solid rgba(255,255,255,.04)",fontSize:11}}>
              <div>
                <div style={{color:"var(--txt)"}}>{n}</div>
                <div style={{fontSize:9,color:"var(--txt3)"}}>{r}</div>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:6}}>
                <span style={{color:"var(--txt2)"}}>{v}</span>
                <span style={{color:"var(--green)",fontSize:10}}>{s}</span>
              </div>
            </div>
          ))}
          <div style={{fontSize:9.5,color:"var(--acc)",marginTop:6,cursor:"pointer"}}>View all items →</div>
        </div>
        {/* Challenges panel */}
        <div style={{background:"var(--bg3)",border:"1px solid var(--border)",borderRadius:10,padding:14}}>
          <div style={{fontSize:11,fontWeight:700,marginBottom:10}}>Operational Challenges</div>
          {[["🪜","Stairs","1 Flight"],["🚶","Long Carry","15 m"],["🅿","Parking Distance","30 m"],["🛗","Lift Access","No"]].map(([ic,k,v])=>(
            <div key={k} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px 0",borderBottom:"1px solid rgba(255,255,255,.04)",fontSize:11}}>
              <span style={{color:"var(--txt2)",display:"flex",alignItems:"center",gap:6}}><span>{ic}</span>{k}</span>
              <span style={{color:"var(--txt)",fontWeight:600}}>{v}</span>
            </div>
          ))}
          <div style={{marginTop:10,padding:"6px 10px",background:"rgba(245,200,66,.06)",border:"1px solid rgba(245,200,66,.2)",borderRadius:7,fontSize:10,color:"var(--yellow)",display:"flex",alignItems:"center",gap:6}}>
            <span>⚠</span> Risk Level: Medium
          </div>
          <div style={{fontSize:9.5,color:"var(--acc)",marginTop:8,cursor:"pointer"}}>Edit Challenges →</div>
        </div>
        {/* AI confidence */}
        <div style={{gridColumn:"1/-1",background:"rgba(0,200,240,0.05)",border:"1px solid var(--borderB)",borderRadius:8,padding:"10px 14px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <span style={{fontSize:11,color:"var(--txt2)"}}>AI Confidence Score</span>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <div style={{height:6,width:120,background:"var(--bg4)",borderRadius:3,overflow:"hidden"}}>
              <div style={{height:"100%",width:"89%",background:"linear-gradient(90deg,var(--acc),var(--acc2))",borderRadius:3}}/>
            </div>
            <span style={{fontSize:13,fontWeight:800,color:"var(--acc)"}}>89%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── ESTIMATE REVIEW STEP ── */
function EstimateReviewStep() {
  return (
    <div className="sc-layout">
      <div className="sc-left">
        <div className="sc-left-title">Estimate Review</div>
        <div className="sc-left-desc">Review and approve the AI-generated estimate before sharing.</div>
        <div className="sc-checks">
          {["AI-suggested pricing","Adjust rates and items","Internal approval workflow","PDF generation ready"].map(c=>(
            <div key={c} className="sc-check"><span className="sc-check-ico">✓</span>{c}</div>
          ))}
        </div>
      </div>
      <div style={{padding:24}}>
        <div style={{background:"var(--bg3)",border:"1px solid var(--border)",borderRadius:10,padding:16}}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14}}>
            <span style={{fontSize:13,fontWeight:700}}>Estimate #EST-2418</span>
            <span style={{background:"rgba(0,200,100,.1)",border:"1px solid rgba(0,200,100,.25)",color:"var(--green)",borderRadius:12,padding:"2px 8px",fontSize:10,fontWeight:700}}>● Approved</span>
          </div>
          {[["Labor","3 Movers","$420.00"],["Truck","Medium Truck","$320.00"],["Packing Materials","","$150.00"],["Other Charges","","$60.00"]].map(([k,s,v])=>(
            <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:"1px solid rgba(255,255,255,.04)",fontSize:12}}>
              <div><div style={{color:"var(--txt2)"}}>{k}</div>{s&&<div style={{fontSize:10,color:"var(--txt3)"}}>{s}</div>}</div>
              <span style={{color:"var(--txt)"}}>{v}</span>
            </div>
          ))}
          <div style={{display:"flex",justifyContent:"space-between",marginTop:10,paddingTop:8,borderTop:"1px solid var(--borderB)"}}>
            <span style={{fontSize:14,fontWeight:700}}>Total</span>
            <div style={{textAlign:"right"}}>
              <div style={{fontSize:22,fontWeight:800,fontFamily:"var(--fd)"}}>$950.00</div>
              <div style={{fontSize:10,color:"var(--green)"}}>Margin: 28% ↑</div>
            </div>
          </div>
          <button style={{width:"100%",marginTop:14,padding:"10px",background:"var(--acc)",color:"#000",border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>Share with Customer →</button>
        </div>
      </div>
    </div>
  );
}

/* ── CUSTOMER ESTIMATE VIEW STEP ── */
function CustomerEstimateStep() {
  return (
    <div className="sc-layout">
      <div className="sc-left">
        <div className="sc-left-title">Customer Estimate View</div>
        <div className="sc-left-desc">Customers view, approve, and respond to estimates through a branded portal.</div>
        <div className="sc-checks">
          {["Branded customer experience","Approve or request changes","Digital signature support","Instant confirmation email"].map(c=>(
            <div key={c} className="sc-check"><span className="sc-check-ico">✓</span>{c}</div>
          ))}
        </div>
      </div>
      <div style={{padding:24}}>
        <div style={{background:"var(--bg3)",border:"1px solid var(--border)",borderRadius:10,overflow:"hidden"}}>
          {/* portal header */}
          <div style={{background:"var(--bg2)",padding:"12px 16px",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{display:"flex",alignItems:"center",gap:7}}>
              <div style={{width:24,height:24,background:"linear-gradient(135deg,#00c8f0,#0070a0)",borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12}}>◈</div>
              <span style={{fontSize:12,fontWeight:700}}>ABC Moving Co.</span>
            </div>
            <span style={{fontSize:10,color:"var(--txt3)"}}>abc.movelogic.ai</span>
          </div>
          <div style={{padding:16}}>
            <div style={{fontSize:12,fontWeight:700,marginBottom:4}}>Your Move Estimate</div>
            <div style={{fontSize:11,color:"var(--txt3)",marginBottom:12}}>Auckland → Wellington · 25 May 2024</div>
            <div style={{background:"var(--bg2)",borderRadius:8,padding:12,marginBottom:12}}>
              {[["Total Estimate","$950.00"],["Move Date","25 May 2024"],["Team Size","3 Movers"],["Truck","Medium Truck"]].map(([k,v])=>(
                <div key={k} style={{display:"flex",justifyContent:"space-between",fontSize:11,padding:"4px 0",borderBottom:"1px solid rgba(255,255,255,.04)"}}>
                  <span style={{color:"var(--txt3)"}}>{k}</span>
                  <span style={{color:"var(--txt)",fontWeight:600}}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{display:"flex",gap:8}}>
              <button style={{flex:1,padding:"9px",background:"var(--green)",color:"#000",border:"none",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer"}}>✓ Approve Estimate</button>
              <button style={{flex:1,padding:"9px",background:"transparent",color:"var(--txt)",border:"1px solid var(--borderB)",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer"}}>Request Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── EXPLORE PLATFORM ── */
const STEP_TABS = [
  {num:1,label:"Create Survey",Component:CreateSurveyForm},
  {num:2,label:"Send Secure Link",Component:SendLinkStep},
  {num:3,label:"Customer Upload",Component:CustomerUploadStep},
  {num:4,label:"AI Detection Workspace",Component:AIDetectionStep},
  {num:5,label:"Estimate Review",Component:EstimateReviewStep},
  {num:6,label:"Customer Estimate View",Component:CustomerEstimateStep},
];

function ExplorePlatform() {
  const [active, setActive] = useState(0);
  const ActiveComponent = STEP_TABS[active].Component;
  return (
    <div className="explore-wrap">
      <h2 className=" section-title mb-3">Explore the platform</h2>
      <p className="explore-sub">Click on each step below to see how the platform works in real life.</p>
      <div className="step-tabs">
        {STEP_TABS.map((t,i)=>(
          <button key={i} className={`step-tab${active===i?" act":""}`} onClick={()=>setActive(i)}>
            <span className="step-num1">{t.num}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </div>
      <div className="step-content-wrap1">
        <ActiveComponent />
      </div>
    </div>
  );
}

/* ── PREVIEW GRID ── */
function PreviewGrid() {
  return (
    <div className="preview-wrap">
      <div className="preview">
        <h2 className=" section-title mb-3">What you can preview</h2>
        <p className="section-sub" style={{textAlign:"center",fontSize:13,color:"var(--txt2)",marginBottom:0}}>A quick look at everything you'll experience inside MoveLogic AI.</p>
        <div className="preview-grid">
          {[
            {icon:"📊",title:"Partner Dashboard",desc:"Get a real-time overview of surveys, estimates, and team performance."},
            {icon:"📋",title:"Survey Management",desc:"Create, manage, and track all your surveys in one place."},
            {icon:"📱",title:"Customer Survey Flow",desc:"See the customer upload experience on mobile and web."},
            {icon:"🔍",title:"AI Detection Workspace",desc:"AI detects items, volume, and challenges with high accuracy."},
            {icon:"📄",title:"Estimate Review",desc:"Review inventory, adjust items, and generate professional estimates."},
            {icon:"👤",title:"Customer Experience",desc:"Customers view, approve, and respond to estimates easily."},
          ].map(({icon,title,desc})=>(
            <div key={title} className="preview-item">
              <div className="preview-icon-wrap">{icon}</div>
              <div className="preview-item-title">{title}</div>
              <div className="preview-item-desc">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── CTA BOTTOM ── */
function CTABottom() {
  return (
    <div className="cta-bottom-wrap">
      <div className="cta-bottom">
        <div className="cta-glyph">◈</div>
        <div className="cta-text">
          <h2>Want to see this with your own workflow?</h2>
          <p>Book a personalised demo and discover how MoveLogic AI can transform your surveys, estimates, and customer experience.</p>
        </div>
        <div className="cta-btns">
          <button className="btn-cta">Book a Demo →</button>
          <button className="btn-cta-o">Contact Us →</button>
        </div>
      </div>
    </div>
  );
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="f-logo"><div className="f-logo-box">◈</div>MoveLogic <em>AI</em></div>
            <div className="f-tagline">AI-powered moving operations platform built for modern moving companies.</div>
            <div className="f-socials">
              {["in","f","▶"].map(s=><button key={s} className="f-soc">{s}</button>)}
            </div>
          </div>
          {[
            {h:"Product",links:["Features","How It Works","Solutions","Pricing"]},
            {h:"Company",links:["About","Book a Demo","Contact"]},
            {h:"Legal",links:["Privacy Policy","Terms of Service"]},
          ].map(({h,links})=>(
            <div key={h}>
              <div className="f-col-h">{h}</div>
              <ul className="f-links">{links.map(l=><li key={l}><a href="#">{l}</a></li>)}</ul>
            </div>
          ))}
          <div>
            <div className="f-col-h">Contact</div>
            <div className="f-contact-row"><span>📍</span> Auckland, New Zealand</div>
            <div className="f-contact-row"><span>✉</span> hello@movelogic.ai</div>
            <div className="f-contact-row"><span>📞</span> +64 21 086 68020</div>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 MoveLogic AI. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

/* ── ROOT ── */
export default function PlatformTourPage() {
  return (
    <> 
      <div className="ml-page"> 
        <Hero />
        <WorkflowChoice />
        <ExplorePlatform />
        <PreviewGrid />
        <CTA
          title="Ready to transform your estimating process?"
          description="Book a Demo and see how MoveLogic AI can help your moving business create faster surveys, improve accuracy, and reduce oprational surprises"
        />
      </div>
    </>
  );
} 