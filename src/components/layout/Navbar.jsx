import '../../styles/layout/navbar.css';
import logo from "../../assets/logo-light.png";
import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <nav className="ml-nav">

            <div className="ml-logo">
                <Link to="/">
                    <img src={logo}
                        alt="MoveLogic"
                        className="login-logo"
                    />
                </Link>

            </div>

            <ul className="ml-nav-links">

                <li>
                    <NavLink
                        to="/features"
                        className={({ isActive }) =>
                            isActive ? "active-nav" : ""} >
                        Features
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/howitworks"
                        className={({ isActive }) =>
                            isActive ? "active-nav" : ""}  >
                        How It Works
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/solutions"
                        className={({ isActive }) =>
                            isActive ? "active-nav" : ""}  >
                        Solutions
                    </NavLink>

                </li>

                <li>

                    <NavLink
                        to="/pricing"
                        className={({ isActive }) =>
                            isActive ? "active-nav" : ""} >
                        Pricing
                    </NavLink>

                </li>

                <li>
                    <NavLink to="/about"
                        className={({ isActive }) =>
                            isActive ? "active-nave" : ""} >
                        About
                    </NavLink>
                </li>

            </ul>

            <div className="ml-nav-actions">
                <button className="btn-outline">
                    See Platform ◇
                </button>

                <button className="btn-primary">
                    <NavLink to="/bookademo"
                        className="text-dark">
                    Book a Demo →
                    </NavLink>
                </button>
            </div>

        </nav>
    )
}

export default Navbar