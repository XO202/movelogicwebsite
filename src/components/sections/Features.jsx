import '../../styles/sections/features.css'
import React from "react"; 
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";
import feature4 from "../../assets/feature4.png";

const cards = [
  {
    tag: "REMOTE AI SURVEYS",
    title: "Let customers complete surveys from anywhere.",
    desc: "Guide customers with easy step-by-step surveys and photo uploads.",
    image: feature1,
  },
  {
    tag: "ESTIMATE MANAGEMENT",
    title: "You're in control of every estimate.",
    desc: "Control pricing visibility, manage internal approvals, and track customer decisions.",
    image:feature4,
  },
  {
    tag: "OPERATIONAL ACCURACY",
    title: "Capture what others miss.",
    desc: "Identify real-world access challenges and service requirements upfront.",
    image:feature2,
  },
  {
    tag: "PARTNER PLATFORM",
    title: "Your branded operating portal.",
    desc: "Each moving company gets a branded subdomain, team access, and pricing configuration.",
    image:feature3,
  },
];

export default function FeatureCards() {
  return (
    <section className="feature-section">
      <div className="feature-grid">
        {cards.map((card, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-content">
              <span className="feature-tag">{card.tag}</span>

              <h3>{card.title}</h3>

              <p>{card.desc}</p>

              <a href="/" className="feature-link">
                Learn more
                <span>→</span>
              </a>
            </div>

            <div className="feature-image">
              <img src={card.image} alt="feature" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}