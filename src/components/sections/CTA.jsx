import '../../styles/sections/cta.css'

import hexagon from "../../assets/hexagon.png";

function CTA({
    title = "Ready to modernise your operations?",
    description = "Power your workflow with AI automation."
}) {

    return (

        <div className="ml-cta">

            <div className="ml-cta-inner">

                <div className="cta-left">

                    <h2 className="cta-title">
                        {title}
                    </h2>

                    <p className="cta-body">
                        {description}
                    </p>

                </div>

                <div className="cta-actions">

                    <button className="btn-cta">
                        Book a Demo →
                    </button>

                    <button className="btn-cta-outline">
                        See Platform Workflow ⊙
                    </button>

                </div>

                <div className="cta-icon1">

                    <img
                        src={hexagon}
                        alt="MoveLogic"
                        className="hexagon-logo"
                    />

                </div>

            </div>

        </div>

    )

}

export default CTA