import "./pricing.css";
import { useState } from "react";
import banner from "../../assets/feature_hero.png";
import aidetect from "../../assets/feature_img.png";
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import s4 from "../../assets/s4.png";
import s5 from "../../assets/s5.png";
import s6 from "../../assets/s6.png";
import CTA from "../../components/sections/CTA";

/* ── HERO SECTION ── */


/* ── DATA ── */
const PLANS = [
  {
    id:"starter", label:"STARTER", popular:false,
    price:"$299", currency:"NZD", per:"/month",
    desc:"Best for small movers testing AI surveys",
    includes:[
      "Includes 30 AI surveys/month",
      "Then $5 per additional AI survey",
      "7-day guided trial includes 5 AI surveys",
    ],
    sectionLabel:null,
    features:["Remote AI Surveys","On-site Survey Workflow","AI Inventory Detection","Estimate Management","Secure Customer Survey & Estimate Link"],
    cta:"Start Guided Trial →",ctaStyle:"outline",
  },
  {
    id:"professional", label:"PROFESSIONAL", popular:true,
    price:"$499", currency:"NZD", per:"/month",
    desc:"For growing moving companies",
    includes:[
      "Includes 75 AI surveys/month",
      "Then $4 per additional AI survey",
      "7-day guided trial includes 5 AI surveys",
    ],
    sectionLabel:{text:"Everything in Starter",color:"purple"},
    features:["Team Management","Operational Challenge Tracking","PDF Estimates","Priority Support"],
    cta:"Book Demo →",ctaStyle:"filled-purple",
  },
  {
    id:"partner", label:"PRIVATE PARTNER", popular:false,
    price:"$699", currency:"NZD", per:"/month",
    desc:"For businesses wanting a branded customer experience",
    includes:[
      "Includes 100 AI surveys/month",
      "Then $4 per additional AI survey",
      "7-day guided trial includes 5 AI surveys",
    ],
    sectionLabel:{text:"Everything in Professional",color:"cyan"},
    features:["Custom Subdomain","Branded Customer Portal","Branded Estimate Experience","Advanced Configuration"],
    cta:"Book Demo →",ctaStyle:"filled-outline",
  },
  {
    id:"enterprise", label:"ENTERPRISE", popular:false,
    price:null, currency:null, per:null,
    desc:"For multi-branch operators and high-volume movers",
    includes:[
      "Custom AI survey volume",
      "Custom pricing structure",
      "Custom pilot available",
    ],
    sectionLabel:{text:"Everything in Private Partner",color:"cyan"},
    features:["Multi-Branch Support","Custom Integrations","Dedicated Account Manager","Enterprise Support"],
    cta:"Talk to Us →",ctaStyle:"outline",
  },
];

const TABLE_ROWS = [
  {icon:"📋",label:"AI Surveys Included",vals:["30","75","100","Custom"]},
  {icon:"💰",label:"Additional AI Survey Cost",vals:["$5","$4","$4","Custom"]},
  {icon:"📱",label:"Remote AI Surveys",vals:["check","check","check","check"]},
  {icon:"🔍",label:"AI Inventory Detection",vals:["check","check","check","check"]},
  {icon:"📄",label:"Estimate Management",vals:["check","check","check","check"]},
  {icon:"🔗",label:"Secure Customer Survey & Estimate Link",vals:["check","check","check","check"]},
  {icon:"👥",label:"Team Management",vals:["—","check","check","check"]},
  {icon:"🏷",label:"White Label Branding",vals:["—","—","check","check"]},
  {icon:"🌐",label:"Custom Subdomain",vals:["—","—","check","check"]},
  {icon:"🏢",label:"Multi-Branch Support",vals:["—","—","—","check"]},
  {icon:"🎯",label:"Guided Trial",vals:["7-day","7-day","7-day","Custom Pilot"]},
  {icon:"📊",label:"Trial AI Surveys",vals:["5","5","5","Custom"]},
];
const FAQS = [
  [
    "How does AI survey pricing work?",
    "Each plan includes a set number of AI surveys per month. An AI survey is counted when room photos are uploaded and processed by MoveLogic AI. If you go over your included monthly limit, additional AI surveys are charged at the rate shown on your plan."
  ],
  [
    "What is included in the 7-day guided trial?",
    "The 7-day guided trial includes access to the platform and 5 AI surveys, so your team can test the full workflow from survey creation to photo upload, AI inventory detection, estimator review, and estimate generation. No credit card is required."
  ],
  [
    "Can I hide pricing from customers?",
    "Yes. MoveLogic AI lets you control pricing visibility for each estimate. You can show pricing, hide pricing, or keep the estimate in internal review mode until your team is ready to share it with the customer."
  ],
  [
    "Can customers complete surveys themselves?",
    "Yes. You can send customers a secure survey link. They can confirm their move details, upload room photos, review detected inventory, and submit the survey without creating an account. Your estimator can then review everything before sharing the final estimate."
  ],
  [
    "Can I use my own branding and subdomain?",
    "Yes, this is available on the Private Partner plan. Your business can have a branded customer experience with your logo, company details, and a custom subdomain such as yourcompany.movelogic.ai."
  ],
  [
    "Do I need special hardware or equipment?",
    "No. Customers can complete remote surveys using a normal smartphone. Your team can also use laptops, tablets, or phones to manage surveys, review inventory, and create estimates."
  ],
  [
    "Can I upgrade later?",
    "Yes. You can start with a smaller plan and upgrade as your usage grows. If you need branded portals, custom subdomains, multi-branch support, or higher AI survey volume, you can move to a higher plan."
  ],
  [
    "What countries do you support?",
    "MoveLogic AI is built from New Zealand and is designed for moving companies in New Zealand, Australia, and other English-speaking markets. If your business operates in another region, contact us and we can discuss whether the platform is suitable for your workflow."
  ],
  [
    "Is there a long-term contract?",
    "No long-term contract is required for standard plans. For enterprise or custom deployments, contract terms may vary depending on the requirements, integrations, and support needs."
  ],
  [
    "What happens if I exceed my included AI surveys?",
    "If you exceed your included monthly AI survey limit, additional AI surveys are charged at the rate listed on your plan. You can monitor your usage and upgrade your plan if your survey volume increases."
  ],
  [
    "Is MoveLogic AI a replacement for my estimator?",
    "No. MoveLogic AI is designed to assist your estimator, not replace them. The AI helps detect inventory, estimate volume, and highlight operational details, while your team stays in control of the final review, pricing, and customer communication."
  ],
  [
    "Is customer data secure?",
    "Yes. Customer survey links are secure, and survey data is only available through the authorised workflow. Customers do not need to create an account, and your team controls how estimates and pricing are shared."
  ]
];

/* ── PRICE CARD ── */
function PriceCard({ plan }) {
  const { label, popular, price, currency, per, desc, includes, sectionLabel, features, cta, ctaStyle } = plan;
  return (
    <div className={`price-card${popular?" popular":""}`}>
      {popular && <div className="popular-badge">MOST POPULAR</div>}
      <div className={`card-plan ${plan.id}`}>{label}</div>
      {price ? (
        <div className="card-price">
          <span className="price-cur">{currency}</span>
          <span className="price-big">{price}</span>
          <span className="price-per">{per}</span>
        </div>
      ) : (
        <div className="price-custom">Custom<br/>Pricing</div>
      )}
      <div className="card-desc">{desc}</div>
      <hr className="card-divider"/>
      <div className="card-includes">
        {includes.map(i=>(
          <div key={i} className="ci-row">
            <span className="ci-ico">✓</span>{i}
          </div>
        ))}
      </div>
      <hr className="card-divider"/>
      {sectionLabel && (
        <div className={`card-section-label ${sectionLabel.color}`}>{sectionLabel.text}</div>
      )}
      <div className="card-features">
        {features.map(f=>(
          <div key={f} className="cf-row">
            <span className="cf-ico">✓</span>{f}
          </div>
        ))}
      </div>
      <button className={`card-cta ${ctaStyle}`}>{cta}</button>
    </div>
  );
}

/* ── HERO ── */
function PricingHero() {
  return (
    <div className="pricing-hero-wrap">
      <div className="pricing-hero">
        <div>
          <div className="ph-badge">Simple, Transparent Pricing</div>
          <h1 className="ph-title">
            Simple pricing for<br/><span className="c2">modern </span>
            <span className="c1">moving companies.</span>
          </h1>
          <p className="ph-body">Choose the plan that fits your business. Start creating AI-powered surveys, improve estimate accuracy, and streamline your moving operations.</p>
          <div className="ph-perks">
            {[
              {icon:"📅",text:"7-day guided trial"},
              {icon:"🔍",text:"5 AI surveys included"},
              {icon:"💳",text:"No credit card required"},
              {icon:"🌏",text:"NZ owned & operated"},
            ].map(({icon,text})=>(
              <div key={text} className="ph-perk">
                <div className="perk-ico">{icon}</div>
                {text}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="cards-wrap">
            {PLANS.map(p=><PriceCard key={p.id} plan={p}/>)}
          </div>
        </div>
      </div>
      <div className="ai-note">
        <span>ℹ</span>
        <span>AI survey usage is counted when uploaded photos are processed by MoveLogic AI.</span>
      </div>
      <div style={{height:24}}/>
    </div>
  );
}

/* ── TRUST BAR ── */
function TrustBar() {
  return (
    <div className="trust-wrap">
      <div className="trust">
        {[
          {icon:"📅",title:"7-day guided trial",desc:"Explore all features risk-free."},
          {icon:"🔍",title:"5 AI surveys included",desc:"Test the platform with real surveys."},
          {icon:"🛡",title:"No credit card required",desc:"Start your guided trial without upfront payment."},
          {icon:"🌿",title:"NZ owned & operated",desc:"Built in New Zealand, for movers like you."},
        ].map(({icon,title,desc})=>(
          <div key={title} className="trust-item">
            <div className="trust-icon">{icon}</div>
            <div>
              <div className="trust-title">{title}</div>
              <div className="trust-desc">{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── COMPARISON TABLE ── */
function CompareTable() {
  return (
    <div className="compare-wrap"> 
      <table className="compare-table">
        <thead>
          <tr className="ct-thead">
            <th> <div className="compare-title">Compare plans</div>
        <div className="compare-sub">Find the plan that fits your business needs.</div></th>
            {["Starter","Professional","Private Partner","Enterprise"].map((h,i)=>(
              <th key={h} className={i===1?"th-pop":""}>
                {h}
                {i===1 && <span className="th-pop-badge">Most Popular</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="ct-tbody">
          {TABLE_ROWS.map(({icon,label,vals})=>(
            <tr key={label}>
              <td><span className="td-ico">{icon}</span>{label}</td>
              {vals.map((v,i)=>{
                if(v==="check") return <td key={i}><span className={`td-check${i===1?" ":""}`}>✓</span></td>;
                if(v==="—") return <td key={i}><span className="td-dash">—</span></td>;
                if(v==="Custom"||v==="Custom Pilot") return <td key={i}><span className="td-custom">{v}</span></td>;
                return <td key={i} style={{color:"var(--txt)",fontWeight:600}}>{v}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── WHY PAYS ── */
function WhyPays() {
  return (
    <div className="why-pays-wrap">
      <div className="why-pays">
        <div className="wp-title">Why MoveLogic AI pays for itself</div>
        <div className="wp-grid">
          {[
            {icon:"🚛",title:"Reduce site visits",desc:"Let customers complete secure AI-assisted surveys remotely."},
            {icon:"🎯",title:"Improve accuracy",desc:"Detect inventory, volume, and operational risks before move day."},
            {icon:"⏱",title:"Save estimator time",desc:"Spend less time on manual surveys and admin — win more jobs."},
            {icon:"⭐",title:"Better customer experience",desc:"Create faster, more transparent survey and estimate workflows."},
          ].map(({icon,title,desc})=>(
            <div key={title} className="wp-card">
              <div className="wp-icon">{icon}</div>
              <div>
                  <div className="wp-card-title">{title}</div>
                  <div className="wp-card-desc">{desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="wp-note">
          <span>ℹ</span>
          <span>One missed inventory item or one unnecessary site visit can cost more than your monthly subscription.</span>
        </div>
      </div>
    </div>
  );
}

/* ── FAQ ── */
function FAQ() {
  const [open, setOpen] = useState({});
  const toggle = (i) => setOpen(p=>({...p,[i]:!p[i]}));
  // Split into two columns
  const left = FAQS.filter((_,i)=>i%2===0);
  const right = FAQS.filter((_,i)=>i%2!==0);
  return (
    <div className="faq-wrap">
      <div className="faq-title">Frequently asked questions</div>
      <div className="faq-grid">
        <div className="faq-card">
          {left.map(([q,a],idx)=>{
            const key=idx*2;
            return(
              <div key={key} className="faq-item" onClick={()=>toggle(key)}>
                <div className="faq-row">
                  <span className="faq-q">{q}</span>
                  <span className={`faq-chevron${open[key]?" open":""}`}>⌄</span>
                </div>
                {open[key]&&<div className="faq-answer">{a}</div>}
              </div>
            );
          })}
        </div>
        <div className="faq-card">
          {right.map(([q,a],idx)=>{
            const key=idx*2+1;
            return(
              <div key={key} className="faq-item" onClick={()=>toggle(key)}>
                <div className="faq-row">
                  <span className="faq-q">{q}</span>
                  <span className={`faq-chevron${open[key]?" open":""}`}>⌄</span>
                </div>
                {open[key]&&<div className="faq-answer">{a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
  
/* ── ROOT ── */
export default function PricingPage() {
  return (
    <> 
      <div className="ml-page"> 
        <PricingHero />
        <TrustBar />
        <CompareTable />
        <WhyPays />
        <FAQ /> 
        <CTA
          title="Ready to medernise your moving estimates?"
          description="Book a Demo and see how MoveLogic AI can help your team create faster surveys, imporove estimate accuracy, and deliver a better customer exeperience."
        />
      </div>
    </>
  );
}
