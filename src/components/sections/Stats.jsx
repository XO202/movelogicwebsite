import '../../styles/sections/stats.css'

function Stats() {

    const items = [
        {
            icon: "🤖",
            val: "Remote AI Surveys",
        },
        {
            icon: "📦",
            val: "AI Inventory Detection",
        },
        {
            icon: "✅",
            val: "Estimator Review Workflow",
        },
        {
            icon: "🛡️",
            val: "Secure Customer Survey Links",
        },
    ]

    return (
        <div className="ml-stats">

            <div className="ml-stats-inner">

                <div className="stats-label">
                    Trusted by moving companies across New Zealand and beyond
                </div>

                <div className="stats-grid">

                    {
                        items.map(({ icon, val, desc }) => (

                            <div
                                key={desc}
                                className="stat-item"
                            >

                                <div className="stat-icon">
                                    {icon}
                                </div>

                                <div>

                                    <div className="stat-val">
                                        {val}
                                    </div>

                                    <div className="stat-desc">
                                        {desc}
                                    </div>

                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>

        </div>
    )

}

export default Stats