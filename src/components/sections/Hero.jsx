import HeroDashboard from './HeroDashboard'

import '../../styles/sections/hero.css'

function Hero() {

    return (
        <section className="hero-section">

            <div className="ml-hero">

                <div>

                    <div className="hero-badge">
                        AI-Powered for Moving Companies
                    </div>

                    <h1 className="hero-title">
                        The future of  moving operations    <span className="accent">  is here.  </span>
                    </h1>

                    <p className="hero-subtitle">
                        AI-assisted surveys, inventory detection from photos,
                        operational risk identification, and accurate estimates—
                        all in one intelligent workflow.
                    </p>

                    <div className="hero-actions">

                        <button className="btn-hero-primary">
                            Book a Demo →
                        </button>

                        <button className="btn-hero-outline">
                           See How It Works  ⊙ <i className='fa fa-play-circle'></i>
                        </button>

                    </div>

                    <div className="hero-features">

                        {
                            [
                                "Remote AI Surveys",
                                "AI Inventory Detection",
                                "Estimator Review"
                            ].map((feature) => (

                                <div
                                    key={feature}
                                    className="hero-feature"
                                >
                                    <div className="dot">
                                        ✓
                                    </div>

                                    {feature}
                                </div>

                            ))
                        }

                    </div>

                </div>

                <div>
                    <HeroDashboard />
                </div>

            </div>

        </section>
    )

}

export default Hero