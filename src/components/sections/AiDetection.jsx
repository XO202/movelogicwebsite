import '../../styles/sections/detection.css'

import aidetect from "../../assets/aidetect.png";
import React from 'react';
import {
    FaRoad,
    FaParking,
    FaBoxOpen,
    FaCircle,
    FaMagic,
} from "react-icons/fa";

import {
    MdElevator,
    MdOutlineStairs,
} from "react-icons/md";

function AiDetection() {

    return (
        <section>

            <div className="ml-detection">

                {/* LEFT CONTENT */}

                <div>

                    <div className="section-tag">
                        AI That Understands Moving
                    </div>

                    <h2 className="section-title-1">
                        AI detects inventory, volume,
                        and operational risks
                        <span className="accent">
                            {" "}before
                        </span>
                        {" "}move day.
                    </h2>

                    <p className="section-body">
                        Our AI analyses room photos to identify items,
                        estimate volume, and highlight access and
                        service challenges - so your estimator can create accurate estimates with confidence.
                    </p>

                    <div className="detection-checklist">

                        {
                            [
                                "Detect items, rooms, and volume",
                                "Identify access and service challenges",
                                "Human review layer for maximum accuracy",
                                "Reduce missed inventory and underquoting"
                            ].map((item) => (

                                <div
                                    key={item}
                                    className="check-item"
                                >

                                    <div className="check-icon">
                                        ✓
                                    </div>

                                    {item}

                                </div>

                            ))
                        }

                    </div>

                </div>

                {/* CENTER VISUAL */}

                <div className="detection-visual">
                    <img src={aidetect} alt="MoveLogic" className="detection-visual" />
                </div>

                {/* RIGHT SUMMARY */}

                <div className="det-summary"> 

                    <div className="detection-card">

                        {/* Detection Summary */}
                        <div className="card-section">
                        <div className="det-summary-title">
                                Detection Summary
                            </div>
                            <div className="info-list">

                                <div className="info-item">
                                    <div className="info-left">
                                        <div className="icon-circle">
                                            <FaBoxOpen />
                                        </div>
                                        <span>Items Detected</span>
                                    </div>

                                    <h5>126</h5>
                                </div>

                                <div className="info-item">
                                    <div className="info-left">
                                        <div className="icon-circle">
                                            <FaCircle />
                                        </div>
                                        <span>Total Volume</span>
                                    </div>

                                    <h5>24.6 m³</h5>
                                </div>

                                <div className="info-item">
                                    <div className="info-left">
                                        <div className="icon-circle">
                                            <FaMagic />
                                        </div>
                                        <span>AI Confidence</span>
                                    </div>

                                    <h5>89%</h5>
                                </div>

                            </div>
                        </div>

                        {/* Operational Challenges */}
                        <div className="card-section"> 
                            <div className="det-summary-title">
                                Operational Challenges
                             </div>
                            <div className="info-list">

                                <div className="info-item">
                                    <div className="info-left">
                                        <div className="icon-circle">
                                            <MdOutlineStairs />
                                        </div>
                                        <span>Stairs</span>
                                    </div>

                                    <h5>1 Flight</h5>
                                </div>

                                <div className="info-item">
                                    <div className="info-left">
                                        <div className="icon-circle">
                                            <FaRoad />
                                        </div>
                                        <span>Long Carry</span>
                                    </div>

                                    <h5>15 m</h5>
                                </div>

                                <div className="info-item">
                                    <div className="info-left">
                                        <div className="icon-circle">
                                            <FaParking />
                                        </div>
                                        <span>Parking Distance</span>
                                    </div>

                                    <h5>30 m</h5>
                                </div>

                                <div className="info-item">
                                    <div className="info-left">
                                        <div className="icon-circle">
                                            <MdElevator />
                                        </div>

                                        <span>Lift Access</span>
                                    </div>

                                    <h5>No</h5>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )

}

export default AiDetection