import '../../styles/layout/footer.css'

import logo from "../../assets/logo-light.png";
import React from 'react';
function Footer() {

    return (

        <footer className="ml-footer">

            <div className="ml-footer-inner">

                <div className="footer-top">

                    {/* BRAND */}

                    <div className="footer-brand">

                        <div className="footer-logo">

                        <img src={logo}
                                alt="MoveLogic"
                                className="login-logo" />

                        </div>

                        <div className="footer-tagline">
                            AI-powered moving operations platform built for modern moving companies.
                        </div>

                        <div className="footer-socials">

                            {
                                ["in"].map((social) => (

                                    <button
                                        key={social}
                                        className="social-btn"
                                    >
                                        {social}
                                    </button>

                                ))
                            }

                        </div>

                    </div>

                    {/* PRODUCT */}

                    <div>

                        <div className="footer-col-title">
                            Product
                        </div>

                        <ul className="footer-links">

                            {
                                ["Features", "How It Works", "Solutions", "Pricing"].map((link) => (

                                    <li key={link}>
                                        <a href="#">
                                            {link}
                                        </a>
                                    </li>

                                ))
                            }

                        </ul>

                    </div>

                    {/* COMPANY */}

                    <div>

                        <div className="footer-col-title">
                            Company
                        </div>

                        <ul className="footer-links">

                            {
                                ["About Us", "Book a Demo", "Contact"].map((link) => (

                                    <li key={link}>
                                        <a href="#">
                                            {link}
                                        </a>
                                    </li>

                                ))
                            }

                        </ul>

                    </div>

                    {/* LEGAL */}

                    <div>

                        <div className="footer-col-title">
                            Legal
                        </div>

                        <ul className="footer-links">

                            {
                                ["Privacy Policy", "Terms of Service"].map((link) => (

                                    <li key={link}>
                                        <a href="#">
                                            {link}
                                        </a>
                                    </li>

                                ))
                            }

                        </ul>

                    </div>

                    {/* CONTACT */}

                    <div>

                        <div className="footer-col-title">
                            Contact
                        </div>

                        <div className="footer-contact-item">
                            <span>📍</span>
                            Auckland, New Zealand
                        </div>

                        <div className="footer-contact-item">
                            <span>✉</span>
                            hello@movelogic.ai
                        </div>
                        <div className="footer-contact-item">
                        © 2026 MoveLogic AI. All rights reserved.
                        </div>
                    </div>

                </div>

            

            </div>

        </footer>

    )

}

export default Footer