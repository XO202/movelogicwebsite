import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import AiDetection from '../components/sections/AiDetection'
import Workflow from '../components/sections/Workflow'
import Features from '../components/sections/Features'
import Testimonials from '../components/sections/Testimonials'
import CTA from '../components/sections/CTA'

function Home() {

    return (
        <div className="ml-page">

            <Hero />

            <Stats />

            <AiDetection />

            <Workflow />

            <Features />

            <Testimonials />

            <CTA
                title="Ready to modernise your moving operations?"
                description="Book a demo and see how MoveLogic AI can help your team
                create faster surveys, improve accuracy, and deliver
                better customer experiences."
            />

        </div>
    )

}

export default Home