import "./HowItWorks.css";
import { useState, useEffect } from "react";
import banner from "../../assets/feature_hero.png";
import detectitem from "../../assets/detectitem.png"; 
import security from "../../assets/security.png";
import phone from "../../assets/phone.png";
import CTA from "../../components/sections/CTA";
   
/* ── HERO SECTION ── */
function Hero() {
  return (
    <div className="hero-wrap1">
      <div className="hero">
        <div>
          <div className="hero-badge">Simple, Intelligent, Powerful</div>
          <h1 className="hero-h1">Smarter surveys.<em> Simpler workflow.</em></h1>
          <p className="hero-p">MoveLogic AI turns room photos into accurate inventories and estimates in minutes—so your team can focus on moving, not measuring.</p>
          <div className="hero-pillss">
            {[
              {icon:"🤖",title:"AI-Powered",sub:"Advanced computer vision understands every item."},
              {icon:"⚡",title:"Fast & Accurate",sub:"Get reliable estimates in minutes, not hours."},
              {icon:"✅",title:"Built for Movers",sub:"Designed around real moving workflows."},
            ].map(({icon,title,sub})=>(
              <div key={title} className="hero-pill">
                <div className="pill-icon">{icon}</div>
                <div className="pill-title">{title}</div>
                <div className="pill-sub">{sub}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="dashboard-preview">
              <img src={banner} alt="MoveLogic Dashboard Banner" className="" />
        </div>
      </div>
    </div>
  );
}

/* ── STEP 1 VISUAL ── */
function Step1Visual() {
  return (
    <div className="step1-visual">
      <div className="phone-mock" style={{position:"relative"}}>
        <img src={phone} alt="MoveLogic phone scan" className="" />
        We guide you to<br />capture the right<br />photos for the<br />best accuracy.
      </div>
      <div className="cube-panel">  
        <img src={security} alt="MoveLogic security scan" className="" />
      </div>
    </div>
  );
}

/* ── STEP 2 VISUAL ── */
function Step2Visual() {
  return (
    <div className="step2-visual">
      <div className="ai-progress-card" style={{position:"relative"}}>
        <div className="ai-prog-title">AI Detection in progress...</div>
        {[["Furniture","Detected"],["Appliances","Detected"],["Boxes","Detected"],["Other Items","Detected"]].map(([k,v])=>(
          <div key={k} className="ai-prog-row">
            <span className="k">{k}</span>
            <span className="v">{v}</span>
          </div>
        ))}
        <div className="ai-prog-bar">
          <div className="prog-lbl">90%</div>
          <div className="prog-track"><div className="prog-fill" style={{width:"90%"}}/></div>
        </div>
        <div className="ai-det-arrow">→</div>
      </div>
      {/* Room with detection boxes */}
      <div className="det-room-card">
         
           <img src={detectitem} alt="MoveLogic Banner" className="" />
      </div>
    </div>
  );
}

/* ── STEP 3 VISUAL ── */
function Step3Visual() {
  return (
    <div className="step3-visual">
      <div className="review-card">
        <div className="rev-hdr">
          <span className="rev-title">Detected Items (126)</span>
          <span className="rev-edit">Edit All</span>
        </div>
        {[["Sofa","Living Room","1.2 m³"],["TV Unit","Living Room","0.3 m³"],["Coffee Table","Living Room","0.2 m³"],["Dining Table","Dining Room","0.8 m³"]].map(([n,r,v])=>(
          <div key={n} className="rev-row">
            <div><div className="rev-k">{n}</div><div className="rev-room">{r}</div></div>
            <div className="rev-v">{v} <span className="rev-check">✓</span></div>
          </div>
        ))}
        <div className="rev-link">View all items</div>
        <div className="rev-confidence"><span>AI Confidence:</span><span className="rev-conf-val">98%</span><span style={{color:"var(--green)"}}>↑</span></div>
      </div>
      <div className="chal-review-card">
        <div className="cr-title">Operational Challenges</div>
        {[["🪜","Stairs","1 Flight"],["🚶","Long Carry","15 m"],["🅿","Parking Distance","30 m"],["🛗","Lift Access","No"]].map(([ic,k,v])=>(
          <div key={k} className="cr-row">
            <span className="cr-k"><span className="cr-ico">{ic}</span>{k}</span>
            <span className="cr-v">{v}</span>
          </div>
        ))}
        <div className="cr-edit">Edit Challenges →</div>
      </div>
    </div>
  );
}

/* ── STEP 4 VISUAL ── */
function Step4Visual() {
  return (
    <div className="step4-visual">
      <div className="est-card">
        <div className="est-hdr">
          <span className="est-id">Estimate #EST-2418</span>
          <span className="est-approved">● Approved</span>
        </div>
        {[["Labor","3 Movers","$420.00"],["Truck","Medium Truck","$320.00"],["Packing Materials","","$150.00"],["Other Charges","","$60.00"]].map(([k,s,v])=>(
          <div key={k} className="est-row">
            <div><div className="est-k">{k}</div>{s&&<div className="est-sub">{s}</div>}</div>
            <span className="est-v">{v}</span>
          </div>
        ))}
        <div className="est-total">
          <div className="est-total-k">Total</div>
          <div><div className="est-total-v">$950.00</div><div className="est-margin">28% ↑ Margin</div></div>
        </div>
      </div>
      <div className="share-card">
        <div className="share-title">Share Estimate</div>
        <div className="share-sub">Send professional estimates to your customers.</div>
        <div className="share-btns">
          {[["✉","Email"],["💬","WhatsApp"],["📱","SMS"],["🔗","Copy Link"]].map(([ic,lb])=>(
            <div key={lb} className="share-btn-item">
              <span className="s-ico">{ic}</span>
              <span>{lb}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── HOW IT WORKS STEPS ── */
const STEPS = [
  {
    num:"01", icon:"📷", title:"Capture Photos",
    body:"Take clear photos of each room using your smartphone.",
    checks:["Works on any device","Guided photo tips","Multiple angles supported"],
    Visual: Step1Visual,
  },
  {
    num:"02", icon:"🤖", title:"AI Analyses Everything",
    body:"Our AI scans photos to detect and measure items, furniture, and spaces.",
    checks:["Item detection & classification","Volume & dimensions","Risk & challenge identification"],
    Visual: Step2Visual,
  },
  {
    num:"03", icon:"📋", title:"Review & Verify",
    body:"Review AI-detected items, adjust if needed, and add any missing details.",
    checks:["Edit or remove items","Add missing items","Confirm operational challenges"],
    Visual: Step3Visual,
  },
  {
    num:"04", icon:"📄", title:"Get Accurate Estimate",
    body:"Generate a professional estimate instantly and share it with your customer.",
    checks:["Instant estimate generation","Professional PDF report","Share & close faster"],
    Visual: Step4Visual,
  },
];

function HowItWorksSection() {
  const [roomImg, setRoomImg] = useState(null);

  useEffect(() => {
    // Try to load the uploaded room scan image
    const img = new Image();
    img.onload = () => setRoomImg(img.src);
    img.onerror = () => setRoomImg(null);
    // Use placeholder room image since we can't load local paths in browser
    img.src = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80";
  }, []);

  return (
    <> 
      <div className="hiw-root">
        <div className="hiw-header">
          <h2 className="hiw-title">How MoveLogic AI works</h2>
          <p className="hiw-sub">From photos to accurate estimates in just a few simple steps.</p>
        </div>

        {STEPS.map(({ num, icon, title, body, checks, Visual }, idx) => (
          <div key={num} className="step-row">
            {/* Left timeline */}
            <div className="step-left">
              <div className="step-circle">
                <span>{icon}</span>
                <span className="step-circle-num">{parseInt(num)}</span>
              </div>
              <div className="step-num-label">{num}</div>
              {idx < STEPS.length - 1 && <div className="step-linee" />}
            </div>

            {/* Content card */}
            <div className="step-content-wrap1">

              {/* Text side */}
              <div className="step-text">
                <h3 className="step-title">{title}</h3>
                <p className="step-body">{body}</p>
                <div className="step-checks">
                  {checks.map((c) => (
                    <div key={c} className="step-check">
                      <span className="check-ico">✓</span>
                      {c}
                    </div>
                  ))}
                </div>
              </div>

              <div className="step-content-wrap">
              <div className="step-arrow">→</div>
              {/* Visual side */}
              <div className="step-visual-area">
                {num === "02" ? <Visual roomImg={roomImg} /> : <Visual />}
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ── BUILT FOR MOVERS ── */
function BuiltForMovers() {
  return (
    <div className="bfm-wrap">
      <div className="bfm">
        <div className="bfm-left">
          <div className="bfm-badge">Built for Movers</div>
          <div className="bfm-title">Designed for real moving companies.</div>
          <button className="bfm-btn">See Platform →</button>
        </div>
        {[
          {icon:"⏱",title:"Save Time",desc:"Reduce survey time by up to 70%"},
          {icon:"🎯",title:"Improve Accuracy",desc:"Up to 98% accuracy with AI detection"},
          {icon:"🏆",title:"Win More Jobs",desc:"Professional estimates build customer trust"},
          {icon:"📈",title:"Increase Profit",desc:"Better accuracy leads to higher margins"},
        ].map(({icon,title,desc})=>(
          <div key={title} className="bfm-stat">
            <div className="bfm-stat-icon">{icon}</div>
            <div>
              <div className="bfm-stat-title">{title}</div>
              <div className="bfm-stat-desc">{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
/* ── ROOT ── */
export default function HowItWorksPage() {
  return (
    <> 
      <div className="ml-page"> 
        <Hero />
        <HowItWorksSection />
        <BuiltForMovers />
        <CTA
                title="See it in action"
                description="Book a demo and see how MoveLogic AI can transform your survey and estimation proccess."
            />
        
      </div>
    </>
  );
}
