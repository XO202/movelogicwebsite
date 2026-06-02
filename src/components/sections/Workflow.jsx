import '../../styles/sections/workflow.css'

function Workflow() {

    const steps = [
        {
            num: "01",
            icon: "📋",
            title: "Create Survey",
            desc: "Enter move details and requirements."
        },
        {
            num: "02",
            icon: "🔗",
            title: "Send Link",
            desc: "Share a secure link with your customer."
        },
        {
            num: "03",
            icon: "📷",
            title: "Upload Photos",
            desc: "Customer uploads room photos."
        },
        {
            num: "04",
            icon: "🤖",
            title: "AI Detects",
            desc: "AI detects inventory and calculates volume."
        },
        {
            num: "05",
            icon: "👁",
            title: "Estimator Reviews",
            desc: "Review and create accurate estimate."
        },
        {
            num: "06",
            icon: "✅",
            title: "Share & Approve",
            desc: "Customer reviews and approves."
        },
    ]

    return (

        <div className="ml-workflow">

            <div className="ml-workflow-inner">

                <div className="workflow-title">
                    From survey to estimate in one intelligent workflow.
                </div>

                <div className="workflow-steps">

                    {
                        steps.map(({ num, icon, title, desc }) => (

                            <div
                                key={num}
                                className="workflow-step"
                            >

                                 
                                <div className="workflow-step">
                                    <div className="step-item active">
                                        <div className="step-circle">
                                                 {icon}
                                        </div>
                                        <div className="step-line"></div>
                                            <div className="step-arrow">
                                                <svg width="22" height="10" viewBox="0 0 22 10" fill="none"><path d="M1 5H20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"></path><path d="M16 1L20 5L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                          <div className="step-number">  {num}</div>
                                        </div>
                                     
                                     </div>


                                <div className="step-title">
                                    {title}
                                </div>

                                <div className="step-desc">
                                    {desc}
                                </div>

                            </div>

                        ))
                    }




                </div>

            </div>

        </div>



    )

}

export default Workflow