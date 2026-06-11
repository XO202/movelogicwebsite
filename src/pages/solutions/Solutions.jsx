import "./solutions.css";
import { useState } from "react";
import banner from "../../assets/feature_hero.png"; 
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import s4 from "../../assets/s4.png";
import s5 from "../../assets/s5.png";
import s6 from "../../assets/s6.png";
import CTA from "../../components/sections/CTA";

/* ── HERO SECTION ── */


/* ── HERO ── */
function Hero() {
  return (
    <div className="hero-wrap">
      <div className="hero">
        <div>
          <div className="hero-badge">Solutions that move your business forward</div>
          <h1 className="hero-h1">
            One platform.<br />
            Built for <span className="c1">every</span><br />
            <span className="c2">moving operation.</span>
          </h1>
          <p className="hero-p">MoveLogic AI adapts to the way moving companies work—helping teams save time, reduce costs, and deliver better customer experiences.</p>
          <div className="hero-pills">
            {[
              { icon: "⚙️", lbl: "Industry specific\nworkflows" },
              { icon: "🤖", lbl: "Operational\nintelligence" },
              { icon: "👥", lbl: "Scalable for\nteams of any size" },
            ].map(({ icon, lbl }) => (
              <div key={lbl} className="hero-pill1">
                <div className="pill-icon1">{icon}</div>
                <div className="pill-lbl">{lbl.split("\n").map((l, i) => <span key={i} style={{ display: "block" }}>{l}</span>)}</div>
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

/* ── SOLUTION CARD SCENES ── */
function TruckScene() {
  return (
    <div className="scene scene-truck h-100">
       <img src={s1} alt="MoveLogic" className="h-100" />
      <div className="scene-icon-wrap">🚛</div>
    </div>
  );
}

function LongDistScene() {
  return (
    <div className="scene scene-long h-100">
       <img src={s2} alt="MoveLogic" className="h-100" />
      <div className="scene-icon-wrap">🚚</div>
    </div>
  );
}

function OfficeScene() {
  return (
    <div className="scene scene-office h-100">
         <img src={s3} alt="MoveLogic" className="h-100" />
      <div className="scene-icon-wrap">🏢</div>
    </div>
  );
}

function StorageScene() {
  return (
    <div className="scene scene-storage h-100"> 
       <img src={s4} alt="MoveLogic" className="h-100" />
      <div className="scene-icon-wrap">🏪</div>
    </div>
  );
}

function BrokerScene() {
  return (
    <div className="scene scene-broker h-100"> 
      <img src={s6} alt="MoveLogic" className="h-100" />
      <div className="scene-icon-wrap">👤</div>
    </div>
  );
}

function IndependentScene() {
  return (
    <div className="scene scene-indie h-100"> 
      <img src={s5} alt="MoveLogic" className="h-100" /> 
      <div className="scene-icon-wrap">🙋</div>
    </div>
  );
}

/* ── SOLUTION CARDS ── */
const SOLUTIONS = [
  {
    Scene: TruckScene,
    title: "Local Moving Companies",
    desc: "Streamline local moves with faster surveys, accurate estimates, and efficient operations.",
    checks: ["Quick AI-powered surveys", "Accurate local estimates", "Optimized route & job scheduling"],
  },
  {
    Scene: LongDistScene,
    title: "Long-distance Movers",
    desc: "Handle complex, long-distance moves with confidence and precision.",
    checks: ["Detailed inventory & volume", "Cross-state pricing accuracy", "Logistics & route planning"],
  },
  {
    Scene: OfficeScene,
    title: "Commercial Movers",
    desc: "Manage office, retail, and commercial moves with minimal downtime.",
    checks: ["Asset & inventory management", "Floor-by-floor planning", "Reduced disruption & downtime"],
  },
  {
    Scene: StorageScene,
    title: "Storage Providers",
    desc: "Track, manage, and optimize storage inventory with complete visibility.",
    checks: ["Inventory tracking", "Space utilization insights", "In & out activity logs"],
  },
  {
    Scene: BrokerScene,
    title: "Moving Brokers",
    desc: "Empower your network with accurate data and seamless communication.",
    checks: ["Compare vendor estimates", "Share jobs & documentation", "Real-time job visibility"],
  },
  {
    Scene: IndependentScene,
    title: "Independent Movers",
    desc: "Do more with less. Get enterprise-grade tools built for independent operators.",
    checks: ["Affordable & easy to use", "Professional estimates", "Win more jobs"],
  },
];

function SolutionsGrid() {
  return (
    <div className="sol-section-wrap">
      <div className="sol-section">
        <div className="sol-header">
          <h2 className="sol-title">Solutions tailored to your business</h2>
          <p className="sol-sub">Powerful tools for every type of moving operation.</p>
        </div>
        <div className="sol-grid">
          {SOLUTIONS.map(({ Scene, title, desc, checks }) => (
            <div key={title} className="sol-card">
              <div className="sol-card-img">
                <Scene />
              </div>
              <div className="sol-card-body">
                <div className="sol-card-title">{title}</div>
                <div className="sol-card-desc">{desc}</div>
                <div className="sol-card-checks">
                  {checks.map(c => (
                    <div key={c} className="sol-check">
                      <span className="sol-check-ico">✓</span>{c}
                    </div>
                  ))}
                </div>
                <div className="sol-arrow">→</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── WHY MOVELOGIC ── */
function WhyMoveLogic() {
  return (
    <div className="why-wrap">
      <div className="why">
        <h2 className="why-title">Why moving companies choose MoveLogic AI</h2>
        <div className="why-grid">
          {[
              {
                icon: "⏱",
                title: "Save Time",
                desc: "Complete surveys in minutes instead of hours with AI-powered inventory detection and automated workflows."
              },
              {
                icon: "🎯",
                title: "Improve Accuracy",
                desc: "Reduce missed inventory and estimate surprises with AI-assisted item detection and volume calculations."
              },
              {
                icon: "💰",
                title: "Reduce Costs",
                desc: "Lower operational expenses by minimizing repeat visits, manual surveys, and estimation errors."
              },
              {
                icon: "📈",
                title: "Increase Capacity",
                desc: "Handle more surveys and estimates without increasing headcount or operational overhead."
              },
              {
                icon: "⭐",
                title: "Delight Customers",
                desc: "Deliver a faster, more transparent survey experience with accurate estimates and professional communication."
              },
            ].map(({ icon, title, desc }) => (
            <div key={title} className="why-item">
              <div className="why-icon">{icon}</div>
              <div>
                <div className="why-item-title">{title}</div>
                <div className="why-item-desc">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── TESTIMONIAL ── */
function Testimonial() {
  return (
    <section className="different-wrap">
  <div className="different">
    
    <div className="different-header">
      <div className="section-badge">Platform Advantages</div>
      <h2 className="different-title">
        Why MoveLogic AI Is Different
      </h2>
      <p className="different-sub">
        Built specifically for moving companies, MoveLogic AI combines
        computer vision, workflow automation, and estimator oversight to
        deliver faster, more accurate surveys and estimates.
      </p>
    </div>

    <div className="different-grid">

      {[
        {
          icon: "📸",
          title: "Remote AI Surveys",
          desc: "Customers complete surveys from any location using their smartphone, reducing the need for on-site visits."
        },
        {
          icon: "📦",
          title: "AI Inventory Detection",
          desc: "Automatically identifies furniture, appliances, cartons, and household items from room photos."
        },
        {
          icon: "⚡",
          title: "Operational Challenge Tracking",
          desc: "Detect and record stairs, long carries, parking restrictions, lift access, and other moving challenges."
        },
        {
          icon: "🎨",
          title: "Branded Customer Experience",
          desc: "Deliver a professional survey experience with your company's branding, messaging, and estimate workflow."
        }
      ].map((item) => (
        <div className="different-card" key={item.title}>
          <div className="different-icon">
            {item.icon}
          </div>

          <h3 className="different-card-title">
            {item.title}
          </h3>

          <p className="different-card-desc">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>
  );
}
/* ── ROOT ── */
export default function SolutionsPage() {
  return (
    <>
      <div className="ml-page">
        <Hero />
        <SolutionsGrid />
        <WhyMoveLogic />
        <Testimonial />
        <CTA
          title="Find the perfect solution for your moving business"
          description="MoveLogic AI adapts to your workflow, team structure, and business goals"
        />
      </div>
    </>
  );
}