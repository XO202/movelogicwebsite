import "./about.css";
import { useState } from "react";
import banner from "../../assets/demo.png";
import aidetect from "../../assets/feature_img.png";
import CTA from "../../components/sections/CTA";

/* ── HERO SECTION ── */

 

/* ── HERO ── */
function DemoHero() {
  return (
    <div className="hero-section">
      <div className="ml-hero">
        <div>
          <div className="ph-badge">DEMO BUILT AROUND YOUR BUSINESS</div>
          <h1 className="ph-title">
          See MoveLogic AI in action <span className="c2">for your moving business. </span>
            
          </h1>
          <p className="ph-body"> Book a personalised demo and see how MoveLogic AI helps movers save time, reduce site visits, and deliver faster, more accurate estimates.</p>
          <div className="ph-perkss">
            {[
              {icon:"✓",text:"No pressure, no obligation"},
              {icon:"✓",text:"See the platform in action"},
              {icon:"✓",text:"Expert walkthrough"},
              {icon:"✓",text:"Get answers to your questions"},
            ].map(({icon,text})=>(
              <div key={text} className="ph-perk1">
                <div className="perk-icon">{icon}</div>
                {text}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="">
                <div className="hero-dashboard">
                  <img src={banner}
                      alt="MoveLogic"
                      className="demo-hero-image"/>
      

              </div>
          </div>
        </div>
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
    {
      icon: "📅",
      title: "30–45 minute demo",
      desc: "Focused on your needs"
    },
    {
      icon: "👥",
      title: "Tailored to your business",
      desc: "See relevant use cases"
    },
    {
      icon: "📈",
      title: "Live platform walkthrough",
      desc: "See key features in action"
    },
    {
      icon: "💬",
      title: "Q&A with our experts",
      desc: "Get all your questions answered"
    },
  ].map(({ icon, title, desc }) => (
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
function DemoBooking() {
  return (
    <section className="demo-section">
      <div className="demo-container">
        {/* Left Form */}
        <div className="demo-form-card">
          <h2>Book your demo</h2>
          <p>
            Fill out the form and we'll get back to you to confirm your demo
            time.
          </p>

          <form>
            <div className="form-grid">
              <div className="form-group">
                <label>
                  Full Name <span>*</span>
                </label>
                <input type="text" placeholder="Your full name" />
              </div>

              <div className="form-group">
                <label>
                  Work Email <span>*</span>
                </label>
                <input type="email" placeholder="you@company.com" />
              </div>

              <div className="form-group">
                <label>
                  Company Name <span>*</span>
                </label>
                <input type="text" placeholder="Your company name" />
              </div>

              <div className="form-group">
                <label>
                  Phone Number <span>*</span>
                </label>

                <div className="phone-input">
                  <select>
                    <option>🇳🇿</option>
                    <option>🇦🇺</option>
                    <option>🇺🇸</option>
                  </select>
                  <input type="text" placeholder="+64 21 123 4567" />
                </div>
              </div>

              <div className="form-group">
                <label>
                  What's your role? <span>*</span>
                </label>
                <select>
                  <option>Select your role</option>
                  <option>Manager</option>
                </select>
              </div>

              <div className="form-group">
                <label>
                  How many moves do you do per month? <span>*</span>
                </label>
                <select>
                  <option>Select an option</option>
                  <option value="">2</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label>What would you like to see in the demo?</label>
              <textarea
                rows="4"
                placeholder="Tell us what you'd like to focus on..."
              ></textarea>
            </div>

            <div className="feature-row">
              <div className="feature-item">
                <div className="feature-icon">🛡️</div>
                <div>
                  <h5>No pressure</h5>
                  <span>Just a helpful demo</span>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🛡️</div>
                <div>
                  <h5>No obligation</h5>
                  <span>You're in control</span>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🛡️</div>
                <div>
                  <h5>Confidential</h5>
                  <span>Your details are kept private</span>
                </div>
              </div>
            </div>

            <button className="btn-primary w-100 text-center d-block">
              Book Demo <span>→</span>
            </button>

            <div className="secure-note">
              🔒 Your information is secure and will never be shared.
            </div>
          </form>
        </div>

        {/* Right Sidebar */}
        <div className="contact-card">
          <h3>Other ways to connect</h3>

          <div className="info-box">
            <div className="box-icon">📞</div>
            <div>
              <h4>Talk to our team</h4>
              <p>Prefer to speak with someone now?</p>
              <a href="tel:+642108668020">+64 21 086 68020</a>
              <span>Mon - Fri, 8:30am - 5:30pm NZST</span>
            </div>
          </div>

          <div className="info-box">
            <div className="box-icon">✉️</div>
            <div>
              <h4>Email us</h4>
              <p>Send us a message and we'll reply within one business day.</p>
              <a href="mailto:hello@movelogic.ai">
                hello@movelogic.ai
              </a>
            </div>
          </div>

          <div className="info-box">
            <div className="box-icon">🏢</div>
            <div>
              <h4>
                Built for moving companies across New Zealand and Australia.
              </h4>

              <p>
                MoveLogic AI is designed for movers who want faster surveys,
                better estimate accuracy, and a more modern customer
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
/* ── ROOT ── */
export default function PricingPage() {
  return (
    <> 
      <div className="ml-page"> 
        <DemoHero /> 
        <TrustBar />
        <DemoBooking/>
        <CTA
          title="Ready to transform your estimating process?"
          description="Book a Demo and see how MoveLogic AI can help your moving business create faster surveys, improve accuracy, and reduce oprational surprises"
        />
      </div>
    </>
  );
}
