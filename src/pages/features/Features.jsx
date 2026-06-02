import "./Features.css";
import { useState } from "react";

import banner from "../../assets/feature_hero.png";

import aidetect from "../../assets/feature_img.png";
import ft2 from "../../assets/ft2.png";
import ft3 from "../../assets/ft3.png";
import CTA from "../../components/sections/CTA";

/* ─── HERO ──────────────────────────────── */


function Hero() {

    return (

        <section>

            <div className="hero">

                <div>

                    <div className="hero-badge">
                        All-in-One Platform
                    </div>

                    <h1 className="hero-h1">

                        Powerful features.
                        <br />
                        <em>Built for movers.</em>

                    </h1>

                    <p className="hero-p">

                        MoveLogic AI combines advanced AI,
                        computer vision, and operational
                        intelligence to deliver faster surveys,
                        accurate estimates, and smoother moves.

                    </p>

                    <div className="hero-pills">

                        <div className="hero-pill1">

                            <div className="pill-icon">
                                🎯
                            </div>

                            <div>

                                <div className="pill-title">
                                    AI-Powered Accuracy
                                </div>

                                <div className="pill-sub">

                                    Advanced detection for inventory
                                    and risks.

                                </div>

                            </div>

                        </div>

                        <div className="hero-pill1">

                            <div className="pill-icon">
                                ⚡
                            </div>

                            <div>

                                <div className="pill-title">
                                    Operational Intelligence
                                </div>

                                <div className="pill-sub">

                                    Identify challenges and reduce
                                    surprises before move day.

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <div className="dashboard-preview">
                    <img src={banner} alt="MoveLogic Dashboard Banner" className="" />
                </div>

            </div>

        </section>

    );

}

/* ─── FEATURE TABS ──────────────────────── */
const TABS = [
    { icon: "📦", label: "AI Inventory\nDetection" },
    { icon: "📐", label: "Volume\nCalculation" },
    { icon: "⚠️", label: "Operational\nChallenges" },
    { icon: "📄", label: "Smart\nEstimates" },
    { icon: "📱", label: "Remote Survey\nExperience" },
    { icon: "👤", label: "Customer\nPortal" },
    { icon: "👥", label: "Team & Role\nManagement" }, 
];

function FeatureTabs({ active, setActive }) {
    return (
        <div className="ftabs-wrap">
            <div className="ftabs">
                {TABS.map((t, i) => (
                    <button key={i} className={`ftab${active === i ? " act" : ""}`} onClick={() => setActive(i)}>
                        <span className="ftab-icon">{t.icon}</span>
                        <span className="ftab-label">{t.label.split("\n")[0]}</span>
                        <span className="ftab-label" style={{ color: "inherit" }}>{t.label.split("\n")[1]}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

/* ─── DETECTION VISUAL ──────────────────── */
function DetectionRoom() {
    const boxes = [
        { top: "12%", left: "6%", w: "40%", h: "32%", lbl: "Sofa", cls: "cyan" },
        { top: "10%", left: "52%", w: "34%", h: "38%", lbl: "TV Unit", cls: "cyan" },
        { top: "48%", left: "18%", w: "36%", h: "28%", lbl: "Coffee Table", cls: "green" },
        { top: "52%", left: "58%", w: "26%", h: "22%", lbl: "Armchair", cls: "yellow" },
    ];
    return (
        <div className="">
            <img src={aidetect} alt="MoveLogic" className="feature-visual" />
        </div>
    );
}

function DetectedItemsList() {
    const items = [
        ["Sofa", "1"], ["TV Unit", "1"], ["Coffee Table", "1"], ["Armchair", "2"],
        ["Dining Table", "1"], ["Dining Chair", "4"], ["Box", "6"], ["Other Items", "6"],
    ];
    return (
        <div className="items-card">
            <div className="items-card-title">Detected Items</div>
            {items.map(([n, v]) => (
                <div key={n} className="items-row">
                    <span className="iname">{n}</span>
                    <span className="ival">{v}</span>
                </div>
            ))}
            <div className="items-total">
                <span>Total Items</span><span className="tv">22</span>
            </div>
        </div>
    );
}

/* ─── VOLUME VISUAL ─────────────────────── */
function VolumeCard() {
    return (
        <div className="vol-card">
            <div className="vol-card-hdr">
                <span className="vol-card-title">Volume Summary</span>
                <span className="vol-close">✕</span>
            </div>
            <div style={{ color: "var(--txt2)", marginBottom: 4 }}>Total Volume</div>
            <div className="vol-big">
                <span className="vol-num">24.6 m³</span>
                <span className="vol-badge">+12%</span>
            </div>
            <div className="vol-vs">vs. manual estimate</div>
            <div className="vol-sub">By Room</div>
            {[["Living Room", "6.2 m³"], ["Kitchen", "4.5 m³"], ["Bedroom 1", "4.8 m³"], ["Bedroom 2", "3.6 m³"], ["Other Areas", "5.5 m³"]].map(([k, v]) => (
                <div key={k} className="vol-row"><span className="vk">{k}</span><span className="vv">{v}</span></div>
            ))}
        </div>
    );
}
/* ─── CHALLENGES VISUAL ─────────────────── */
function ChallengesRoom() {
    return (
        <div className="chal-room1">
            <img src={ft3} alt="MoveLogic Features Banner" className="" />
        </div>
    );
}

function ChallengesList() {
    return (
        <div className="chal-list-card">
            <div className="chal-list-title">Operational Challenges</div>
            {[["🪜", "Stairs", "1 Flight"], ["🚶", "Long Carry", "15 m"], ["🅿", "Parking Distance", "30 m"], ["🛗", "Lift Access", "No"]].map(([ic, k, v]) => (
                <div key={k} className="chal-list-row">
                    <span className="ck"><span className="ck-icon">{ic}</span>{k}</span>
                    <span className="cv">{v}</span>
                </div>
            ))}
            <div className="risk-row">
                <span style={{ fontSize: 12, color: "var(--txt2)" }}>Risk Level</span>
                <span className="risk-badge">● Medium</span>
            </div>
        </div>
    );
}

/* ─── ESTIMATE VISUAL ───────────────────── */
function EstimateCard() {
    return (
        <div className="est-card">
            <div className="est-hdr">
                <span className="est-id">Estimate #EST-2418</span>
                <span className="est-approved">● Approved</span>
            </div>
            {[
                ["Labor", "3 Movers", "$420.00"],
                ["Truck", "Medium Truck", "$320.00"],
                ["Packing Materials", "", "$150.00"],
                ["Other Charges", "", "$60.00"],
            ].map(([k, sub, v]) => (
                <div key={k} className="est-row">
                    <div><div className="ek">{k}</div>{sub && <div className="esub">{sub}</div>}</div>
                    <span className="ev">{v}</span>
                </div>
            ))}
            <div className="est-total">
                <div><div className="etk">Total</div></div>
                <div><div className="etv">$950.00</div><div className="est-margin">Margin: 26%↑</div></div>
            </div>
        </div>
    );
}

function EstimateChart() {
    const data = [
        { label: "Low", height: 20, active: false },
        { label: "Average", height: 90, active: true },
        { label: "High", height: 120, active: false },
    ];
    return (
        <div className="chart-card">
            <div className="estimate-card">

                <h3 className="chart-title">Estimate Comparison</h3>

                <div className="chart-legend">
                    <div className="legend-item">
                        <span className="dot cyan"></span>
                        <span>Your Estimate</span>
                    </div>

                    <div className="legend-item">
                        <span className="dot gray"></span>
                        <span>Market Average</span>
                    </div>
                </div>

                <div className="chart-wrapper">

                    <div className="chart-bars">
                        {data.map((item, index) => (
                            <div className="bar-group" key={index}>
                                <div
                                    className={`bar ${item.active ? "active" : ""}`}
                                    style={{ height: `${item.height}px` }}
                                ></div>

                                <span className="bar-label">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="chart-line"></div>

                </div>
            </div>

        </div>
    );
}

/* ─── FEATURE SECTIONS ──────────────────── */
function FeatureSection01() {
    return (
        <div className="fr-section">
            <div className="contentbox">
                <div className="fr-num">01</div>
                <h3 className="fr-title">AI Inventory Detection</h3>
                <p className="fr-body">Our AI analyses room photos to detect items, furniture, appliances, and boxes automatically. No manual counting. No guesswork.</p>

                <div className="fr-checks">
                    {["Detects 1000+ item types", "Recognizes furniture, appliances, and boxes", "High accuracy with continuous learning"].map(c => (
                        <div key={c} className="fr-check"><span className="fr-check-icon">✓</span>{c}</div>
                    ))}
                </div>
            </div>
            <div className="fr-visual two-col">
                <DetectionRoom />
                <DetectedItemsList />
            </div>
        </div>
    );
}

function FeatureSection02() {
    return (
        <div className="fr-section">
            <div className="contentbox">
                <div className="fr-num">02</div>
                <h3 className="fr-title">Volume Calculation</h3>
                <p className="fr-body">Get accurate volume calculations from detected items using advanced AI models. Faster, smarter, and more reliable.</p>
                <div className="fr-checks">
                    {["Automatic volume per item", "Total volume by room and overall", "Supports custom item dimensions"].map(c => (
                        <div key={c} className="fr-check"><span className="fr-check-icon">✓</span>{c}</div>
                    ))}
                </div>
            </div>
            <div className="fr-visual two-col">
                <VolumeCard />
                <div className="">
                    <img src={ft2} alt="MoveLogic" className="ft2" />
                </div>
                <div>




                </div>
            </div>
        </div>
    );
}

function FeatureSection03() {
    return (
        <div className="fr-section">
            <div className="contentbox">
                <div className="fr-num">03</div>
                <h3 className="fr-title">Operational Challenges</h3>
                <p className="fr-body">AI identifies potential operational challenges that could impact the move so you can plan ahead.</p>
                <div className="fr-checks">
                    {["Detect stairs, long carry, parking distance", "Identify lift access and tight spaces", "Reduce surprises and improve margins"].map(c => (
                        <div key={c} className="fr-check"><span className="fr-check-icon">✓</span>{c}</div>
                    ))}
                </div>
            </div>
            <div className="w-100 position-relative">
                <ChallengesRoom />
                <ChallengesList />
            </div>
        </div>
    );
}

function FeatureSection04() {
    return (
        <div className="fr-section">
            <div className="contentbox">
                <div className="fr-num">04</div>
                <h3 className="fr-title">Smart Estimates</h3>
                <p className="fr-body">Convert survey data into accurate, consistent estimates in minutes not hours.</p>
                <div className="fr-checks">
                    {["AI-suggested rates and labor", "Consistent pricing across estimators", "Faster turnaround, higher win rate"].map(c => (
                        <div key={c} className="fr-check"><span className="fr-check-icon">✓</span>{c}</div>
                    ))}
                </div>
            </div>
            <div className="fr-visual1 two-col">
                <EstimateCard />
                <EstimateChart />
            </div>
        </div>
    );
}

/* ─── LEFT NAV ──────────────────────────── */
const LEFT_NAV = [
    { title: "AI Inventory Detection", desc: "Detect items, furniture, and volumes automatically." },
    { title: "Volume Calculation", desc: "Accurate volume from photos in seconds." },
    { title: "Operational Challenges", desc: "Identify risks and access issues before move day." },
    { title: "Smart Estimates", desc: "Generate accurate, consistent estimates with confidence." },
    { title: "Remote Survey Experience", desc: "Seamless surveys for your customers anywhere." },
    { title: "Customer Portal", desc: "Branded portal for survey updates and documents." },
    { title: "Team & Role Management", desc: "Manage estimators, roles, and permissions easily." }, 
];

function LeftNav({ active, setActive }) {
    return (
        <div className="fl-nav">
            {LEFT_NAV.map((item, i) => (
                <div key={i} className={`fl-item${active === i ? " act" : ""}`} onClick={() => setActive(i)}>
                    <div className="fl-item-title">{item.title}</div>
                    <div className="fl-item-desc">{item.desc}</div>
                </div>
            ))}
            <hr className="fl-sep" />
            <div className="fl-see">
                <div className="fl-see-lbl">See it in action</div>
                <div className="fl-see-p">Explore how these features work together.</div>
                <button className="see-platform-btn">See Platform ◇</button>
            </div>
        </div>
    );
}

/* ─── RIGHT CONTENT ─────────────────────── */
function RightContent({ active }) {
    return (
        <div className="fr-content">
            <FeatureSection01 />
            <FeatureSection02 />
            <FeatureSection03 />
            <FeatureSection04 />
        </div>
    );
} 

function Features() {

    const [activeTab, setActiveTab] = useState(0);

    return (

        <div className="ml-page">

            <Hero />

            <FeatureTabs
                active={activeTab}
                setActive={setActiveTab}
            />

            <div className="fdetail-wrap">

                <LeftNav
                    active={activeTab}
                    setActive={setActiveTab}
                />

                <RightContent
                    active={activeTab}
                />

            </div>
            <CTA
                title="See all features in action"
                description="Explore the full platform and see how MoveLogic AI can transform your moving operations."
            />

        </div>

    );

}

export default Features;