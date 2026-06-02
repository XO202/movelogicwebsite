import '../../styles/sections/testimonials.css'

function Testimonials() {

    const testiData = [
        {
            text: "The remote survey flow is a game changer. Our customers love how easy and modern it is.",
            name: "Sarah T.",
            role: "General Manager",
            company: "Premium Movers",
            city: "Wellington",
        },
        {
            text: "We reduced underquoting and operational surprises. Our profit margins have improved.",
            name: "James R.",
            role: "Director",
            company: "Best Moves",
            city: "New Zealand",
        },
        {
            text: "MoveLogic AI understands our workflow better than any other platform we've used.",
            name: "Daniel K.",
            role: "Operations Manager",
            company: "Wide Moves",
            city: "Auckland",
        },
    ]

    return (

        <div className="ml-testimonials">

            <div className="ml-testi-inner">

                <div>

                    <div className="testi-label">
                        Trusted by Movers, Backed by Results
                    </div>

                    <div className="testi-heading">
                        MoveLogic AI has cut our survey time in half and improved our estimate accuracy significantly.
                    </div>

                    <div className="testi-stars">
                        ★★★★★
                    </div>

                    <div className="testi-rating">
                        4.9/5 from 120+ reviews
                    </div>

                </div>

                {
                    testiData.map(({
                        text,
                        name,
                        role,
                        company,
                        city
                    }) => (

                        <div
                            key={name}
                            className="testi-card"
                        >

                            <div className="testi-quote">
                            ❝
                            </div>

                            <div className="testi-text">
                                {text}
                            </div>

                            <div className="testi-author">

                                <div className="testi-avatar">

                                    <div className="avatar-circle">
                                        {name[0]}
                                    </div>

                                    <div>

                                        <div className="testi-name">
                                            {name}
                                        </div>

                                        <div className="testi-role">
                                            {role}
                                        </div>

                                    </div>

                                </div>

                                <div className="testi-company">

                                    <span className="company-tag">
                                        {company.toUpperCase()}
                                    </span>

                                    {city.toUpperCase()}

                                </div>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>

    )

}

export default Testimonials