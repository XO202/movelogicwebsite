import "./about.css";
import { useState } from "react";
import banner from "../../assets/about.png";
import about1 from "../../assets/a1.png";
import about2 from "../../assets/a2.png";
import CTA from "../../components/sections/CTA";

 
/* ── HERO ── */
function Hero() {
  return (
    <div className="hero-wrap">
      <div className="hero-a">
        <div>
          <div className="hero-badge">About MoveLogic AI</div>
          <h1 className="hero-h2">
            Built for moving companies that want <span className="c1">smarter, faster, more accurate operations.</span>
          </h1>
          <p className="hero-h2-p">MoveLogic AI is built by Isoft Technologies, an Auckland-based technology company focused on practical AI, automation, and operational software for logistics and service businesses.</p>
          <div className="hero-pills-new">
            {[
              {icon:"📍",title:"Built in Auckland, New Zealand"},
              {icon:"🤖",title:"Practical AI for real operations"},
              {icon:"👤",title:"Human review stays in control"},
              {icon:"🔒",title:"Secure survey & estimate workflows"},
            ].map(({icon,title})=>(
              <div key={title} className="hero-pill1">
                <div className="pill-icon1">{icon}</div>
                <div className="pill-text1">{title}</div>
              </div>
            ))}
          </div>
        </div>
          <div className="dashboard-banner">
              <img src={banner} alt="MoveLogic Banner" className="" />
          </div>
      </div>
    </div>
  );
}

/* ── WHY EXISTS ── */
function WhyExists() {
  return (
    <div className="why-wrap">
      <div className="why-a">
        <div>
          <div className="why-left-title">Why MoveLogic AI exists</div>
          <p className="why-left-p">
            Moving companies still lose time on site visits, miss inventory, underquote jobs, and deal with operational surprises. MoveLogic AI was created to bring AI surveys, inventory detection, estimator review, and customer estimate&nbsp;<a href="#">workflows</a> into one&nbsp;<a href="#">practical</a> platform.
          </p>
        </div>
        <div className="why-right">
          {[
            {icon:"📋",title:"Too many manual surveys",desc:"Wasted time on-site and in travel.",link:"Faster remote workflows"},
            {icon:"📦",title:"Missed inventory",desc:"Items get missed, estimates are wrong.",link:"Better estimate accuracy"},
            {icon:"⚠",title:"Underquoting risk",desc:"Hidden challenges lead to margin loss.",link:"More operational visibility"},
            {icon:"🔗",title:"Disconnected experience",desc:"Customers get confused and delayed.",link:"Secure survey-to-estimate flow"},
          ].map(({icon,title,desc,link})=>(
            <div key={title} className="why-card">
              <div className="why-card-icon">{icon}</div>
              <div>
                  <div className="why-card-title">{title}</div>
                  <div className="why-card-desc">{desc}</div>
                  <div className="why-card-link">{link}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function WhyWeBuilt() {
  return (
    <section className="built-wrap">
      <div className="built">

        <div className="built-header">
          <div className="section-badge">
            Our Story
          </div>

          <h2 className="built-title">
            Why We Built MoveLogic AI
          </h2>

          <p className="built-sub">
            The moving industry has relied on manual surveys, phone calls,
            spreadsheets, and fragmented workflows for decades. We believed
            there had to be a better way.
          </p>
        </div>

        <div className="built-grid">

          <div className="built-card">
            <div className="built-icon">🚛</div>

            <h3>Traditional Surveys Slow Teams Down</h3>

            <p>
              On-site surveys consume valuable estimator time, create scheduling
              challenges, and limit how many opportunities a team can handle each day.
            </p>
          </div>

          <div className="built-card">
            <div className="built-icon">📸</div>

            <h3>Customers Expect Digital Experiences</h3>

            <p>
              Modern customers want convenience, speed, and transparency. Remote
              surveys make it easier to collect inventory information from anywhere.
            </p>
          </div>

          <div className="built-card">
            <div className="built-icon">🤖</div>

            <h3>AI Can Improve Accuracy</h3>

            <p>
              Advances in computer vision make it possible to identify inventory,
              room contents, and moving challenges with greater consistency.
            </p>
          </div>

          <div className="built-card">
            <div className="built-icon">📈</div>

            <h3>Moving Companies Need Better Tools</h3>

            <p>
              MoveLogic AI was built to help movers work smarter, increase capacity,
              improve estimate quality, and deliver a better customer experience.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
/* ── ABOUT COMPANY / BELIEVE ── */
function AboutCompany() {
  return (
    <div className="about-company-wrap">
      <div className="about-company">
        <div className="dfr-firstbox gridbox2"> 
          <div className="ac-built">
            <div className="ac-built-title">Built by Isoft Technologies</div>
            <p className="ac-built-p">We're an Auckland, New Zealand software company building custom software, AI, and business automation for operational businesses. MoveLogic AI is a product of our commitment to create practical, real-world software that solves real operational problems.</p>
            <div className="ac-tags">
              {[
                {icon:"📍",text:"Auckland-based"},
                {icon:"🏢",text:"Business-first approach"},
                {icon:"🤖",text:"AI + workflow expertise"},
                {icon:"✅",text:"Trusted software delivery"},
              ].map(({icon,text})=>(
                <div key={text} className="ac-tag"><span className="ac-tag-ico">{icon}</span>{text}</div>
              ))}
            </div>
          </div>
          <div className="ac-isoft">
            <div className="ac-isoft-hdr">
              <div className="ac-isoft-icon">◈</div>
              <div className="ac-isoft-name">Isoft Technologies</div>
            </div>
            {[
              {k:"Founded",v:"Auckland, New Zealand"},
              {k:"Focus",v:"Custom software, AI, and business automation"},
              {k:"Approach",v:"Founder-led and product-focused"},
              {k:"Mission",v:"Help operational businesses work smarter every day"},
            ].map(({k,v})=>(
              <div key={k} className="ac-isoft-row">
                <div className="ac-isoft-key"><span>◈</span>{k}</div>
                <div className="ac-isoft-val">{v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="dfr-firstbox"> 
          <div>
            <div className="ac-believe-title">What we believe</div>
            <div className="ac-believe-grid">
              {[
                {icon:"🤖",text:"AI should support people, not replace them."},
                {icon:"👁",text:"Estimators should stay in control of final decisions."},
                {icon:"✅",text:"Customer surveys should be simpler and more secure."},
                {icon:"📊",text:"Moving operations should be more accurate and less manual."},
              ].map(({icon,text})=>(
                <div key={text} className="ac-believe-item">
                  <div className="ab-icon">{icon}</div>
                  <div className="ab-text">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── WHAT MAKES DIFFERENT ── */
function WhatMakesDifferent() {
  return (
    <div className="difference">
      <div className="diff-wrap">
        <div className="diff-title">What makes MoveLogic AI different</div>
        <div className="diff-grid">
          {/* Card 1 – Survey workflows */}
          <div className="diff-card">
            <div className="diff-card-title">On-site and remote AI survey workflows</div>
            <div className="diff-visual">
                <img src={about1} alt="MoveLogic Banner" className="" />
            </div>
            <div className="diff-desc">Capture photos, answer guided questions, and complete surveys from anywhere.</div>
          </div>
          {/* Card 2 – AI detection */}
          <div className="diff-card">
            <div className="diff-card-title">AI inventory detection with human review layer</div>
            <div className="diff-visual">
              
                  <img src={about2} alt="MoveLogic Banner" className="" />
            </div>
            <div className="diff-desc">AI detects items and rooms. Estimators review, edit, and approve before estimates.</div>
          </div>
          {/* Card 3 – Operational challenge */}
          <div className="diff-card">
            <div className="diff-card-title">Operational challenge tracking</div>
            <div className="diff-visual">
              <div className="dv-challenges">
                {[["🪜","Stairs","1 Flight"],["🚶","Long Carry","15 m"],["🅿","Parking Distance","30 m"],["🛗","Lift Access","No"]].map(([ic,k,v])=>(
                  <div key={k} className="dv-chal-row">
                    <span className="dk"><span>{ic}</span>{k}</span><span className="dv2">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="diff-desc">Capture the details that impact moves: access, distance, lifts, stairs, and more.</div>
          </div>
          {/* Card 4 – Pricing visibility */}
          <div className="diff-card">
            <div className="diff-card-title">Pricing visibility control</div>
            <div className="diff-visual">
              <div className="dv-pricing">
                <div className="dv-p-row"><span className="pk">Show to customer</span><div className="dv-toggle"/></div>
                {[["Service Type","Included ✓"],["Total Volume","Included ✓"],["Operational Challenges","Included ✓"],["Line Item Pricing","Hidden"]].map(([k,v])=>(
                  <div key={k} className="dv-p-row">
                    <span className="pk">{k}</span>
                    <span className={v==="Hidden"?"dv-hidden":""} style={{fontSize:9,color:v==="Hidden"?"var(--txt3)":"var(--green)"}}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="diff-desc">You decide what customers see—keep pricing, margins, and details under your control.</div>
          </div>
          {/* Card 5 – Branded portals */}
          <div className="diff-card">
            <div className="diff-card-title">Branded partner portals and secure experience</div>
            <div className="diff-visual">
              <div className="dv-portal">
                <div className="dv-portal-hdr">
                  <div className="dv-portal-hdr-ico">◈</div>
                  Your Moving Co.
                </div>
                <div className="dv-portal-body">
                  <div className="dv-portal-lbl">Your Estimate</div>
                  <div className="dv-portal-price">$1,620 <span style={{fontSize:10,color:"var(--txt3)",fontFamily:"var(--fb)"}}>NZD</span></div>
                  <button className="dv-portal-btn">View Estimate</button>
                </div>
              </div>
            </div>
            <div className="diff-desc">Deliver a branded, secure portal experience that builds trust and professionalism.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
function BusinessOutcomes() {
  const outcomes = [
    {
      icon: "📈",
      title: "Increase Estimator Capacity",
      desc: "Handle more surveys and estimate opportunities without increasing headcount."
    },
    {
      icon: "🎯",
      title: "Improve Estimate Accuracy",
      desc: "Reduce inventory omissions and create more reliable moving estimates."
    },
    {
      icon: "⚡",
      title: "Deliver Faster Quotes",
      desc: "Shorten turnaround times and respond to customers more quickly."
    },
    {
      icon: "🚛",
      title: "Reduce On-Site Visits",
      desc: "Minimize travel requirements with AI-powered remote surveys."
    },
    {
      icon: "⭐",
      title: "Improve Customer Experience",
      desc: "Provide a modern, transparent, and convenient survey process."
    },
    {
      icon: "💰",
      title: "Lower Operational Costs",
      desc: "Reduce survey expenses while improving operational efficiency."
    }
  ];

  return (
    <section className="outcomes-wrap">
      <div className="outcomes">

        <div className="outcomes-header">
          <div className="section-badge">
            Business Outcomes
          </div>

          <h2 className="outcomes-title">
            Real Results for Moving Companies
          </h2>

          <p className="outcomes-sub">
            MoveLogic AI helps moving companies streamline operations,
            improve efficiency, and deliver a better customer experience.
          </p>
        </div>

        <div className="outcomes-grid">
          {outcomes.map((item) => (
            <div className="outcomes-card" key={item.title}>
              <div className="outcomes-icon">
                {item.icon}
              </div>

              <h3 className="outcomes-card-title">
                {item.title}
              </h3>

              <p className="outcomes-card-desc">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
/* ── DESIGNED FOR REAL ── */
function DesignedForReal() {
  return (
    <div className="dfr-wrap">
      <div className="dfr">
        <div style={{gridColumn:"1/-1"}}>
          <div className="dfr-mainbox griddd-2">

            <div className="dfr-firstbox">
              <div style={{fontSize:22,fontWeight:800,marginBottom:8}}>Designed for real operational workflows</div>
              <div className="grid-data"> 
              {[
                {icon:"🚛",title:"Built for moving companies, not generic quoting tools.",desc:"Purpose-built for the moving and logistics industry, with workflows that fit."},
                {icon:"📱",title:"Customers can complete surveys without creating an account.",desc:"Frictionless experience for faster completion and higher response."},
                {icon:"🔍",title:"Estimators stay in control before any estimate is shared.",desc:"Review, adjust, and approve every detail to protect accuracy and margins."},
              ].map(({icon,title,desc})=>(
                <div key={title} className="dfr-card">
                  <div className="dfr-icon">{icon}</div>
                  <div>
                        <div className="dfr-card-title">{title}</div>
                        <div className="dfr-card-desc">{desc}</div>
                  </div>
                </div>
              ))}
              </div>
              {/* Quote */}
            </div>
              <div className="dfr-lastbox">
                  <div className="dfr-quote">
                      <div className="dfr-quote-mark">"</div>
                      <div className="dfr-quote-text">MoveLogic AI helps bring structure, speed, and confidence to the moving estimate process.</div>
                      <div className="dfr-quote-attr">— Moving Company Operator</div>
                      <div className="dfr-quote-mark-close">"</div>
                  </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── ROOT ── */
export default function AboutPage() {
  return (
    <> 
      <div className="ml-page"> 
        <Hero />
        <WhyExists />
        <WhyWeBuilt />
        <AboutCompany />
        <WhatMakesDifferent />
        <BusinessOutcomes />
        <DesignedForReal />
        <CTA /> 
      </div>
    </>
  );
}
