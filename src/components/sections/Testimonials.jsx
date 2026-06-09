import '../../styles/sections/testimonials.css'

function Testimonials() {

    const benefits = [
        {
          title: "Faster Survey Completion",
          icon: "⚡",
          description:
            "Reduce survey time with AI-assisted workflows and streamlined data collection.",
        },
        {
          title: "Reduced Missed Inventory",
          icon: "📦",
          description:
            "Improve inventory accuracy by automatically detecting household items from photos.",
        },
        {
          title: "Better Operational Visibility",
          icon: "📊",
          description:
            "Track inventory, survey progress, and operational challenges from one platform.",
        },
        {
          title: "Consistent Estimating Process",
          icon: "✅",
          description:
            "Standardize estimator reviews and pricing workflows across every survey.",
        },
      ];

    return (

        <section className="why-movelogic">
    <div className="ml-testi-inner">

        <div className="section-header text-center">
            <span className="section-tag">
                WHY MOVELOGIC AI
            </span>

            <h2 className="section-title-2">
                Why Moving Companies Choose
                <span className="accent"> MoveLogic AI</span>
            </h2>

            <p className="why-body">
                Built to help moving companies streamline surveys,
                improve inventory accuracy, and deliver better customer experiences.
            </p>
        </div>

        <div className="benefits-grid">
            {benefits.map((item, index) => (
                <div className="benefit-card" key={index}>
                    <div className="benefit-icon">
                        {item.icon}
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                </div>
            ))}
        </div>

    </div>
</section>

    )

}

export default Testimonials