import '../../styles/sections/cta.css'

import hexagon from "../../assets/hexagon.png";
import { Link } from 'react-router-dom';

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
                     <Link 
                        to="/bookademo">
                        <button className="btn-cta">
                            Book a Demo →
                        </button>
                    </Link>
                    <Link 
                        to="/platform">
                    <button className="btn-cta-outline">
                        See Platform Workflow ⊙
                    </button>
                    </Link>

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