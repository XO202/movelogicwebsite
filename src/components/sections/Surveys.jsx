import React from "react";
import '../../styles/sections/operation.css'

const features = [
    {
        title: "On-site Surveys",
        icon: "🏠",
        description:
          "Capture accurate inventory details through structured on-site assessments for reliable moving estimates.",
      },
      {
        title: "Remote AI Surveys",
        icon: "🤖",
        description:
          "Enable customers to complete surveys remotely using AI-powered image analysis and guided workflows.",
      },
      {
        title: "Inventory Detection",
        icon: "📦",
        description:
          "Automatically identify and categorize household items from photos to reduce manual data entry.",
      },
      {
        title: "Operational Challenge Tracking",
        icon: "📊",
        description:
          "Monitor survey risks, special requirements, and operational challenges before move day.",
      },
      {
        title: "Estimator Review",
        icon: "✅",
        description:
          "Allow estimators to validate AI-generated results and ensure pricing accuracy before approval.",
      },
      {
        title: "Secure Customer Estimate Sharing",
        icon: "🔒",
        description:
          "Share professional estimates through secure customer links with controlled access and visibility.",
      },
];

const BuiltForModernOperations = () => {
  return (
    <section className="modern-operations section-padding">
      <div className="ml-opration-inner">
        <div className="section-header text-center">
          <span className="section-tag mb-3">Moving Industry Solutions</span>
          <h2 className="section-title1">
            Built for Modern Moving Operations
          </h2>
          <p className="why-body">
            Streamline surveys, inventory management, estimating, and customer
            communication with one intelligent platform.
          </p>
        </div>

        <div className="operations-grid">
          {features.map((feature, index) => (
            <div className="operation-card" key={index}>
              <div className="operation-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuiltForModernOperations;