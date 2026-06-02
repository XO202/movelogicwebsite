import '../../styles/sections/stats.css'

function Stats() {

    const items = [
        {
            icon: "⊞",
            val: "10,000+",
            desc: "Surveys Completed"
        },
        {
            icon: "◎",
            val: "98%",
            desc: "Estimate Accuracy Improvement"
        },
        {
            icon: "⚡",
            val: "40%",
            desc: "Faster Survey Turnaround"
        },
        {
            icon: "🌐",
            val: "90+",
            desc: "Moving Companies Worldwide"
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