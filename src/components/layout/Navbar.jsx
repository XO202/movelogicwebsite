import '../../styles/layout/navbar.css';
import logo from "../../assets/logo-light.png";
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="ml-nav">

            {/* Logo */}
            <div className="ml-logo">
                <Link to="/" onClick={closeMenu}>
                    <img
                        src={logo}
                        alt="MoveLogic"
                        className="login-logo"
                    />
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            {/* Navigation Links */}
            <ul className={`ml-nav-links ${menuOpen ? "show-menu" : ""}`}>

                <li>
                    <NavLink
                        to="/features"
                        className={({ isActive }) =>
                            isActive ? "active-nav" : ""
                        }
                        onClick={closeMenu}
                    >
                        Features
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/howitworks"
                        className={({ isActive }) =>
                            isActive ? "active-nav" : ""
                        }
                        onClick={closeMenu}
                    >
                        How It Works
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/solutions"
                        className={({ isActive }) =>
                            isActive ? "active-nav" : ""
                        }
                        onClick={closeMenu}
                    >
                        Solutions
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/pricing"
                        className={({ isActive }) =>
                            isActive ? "active-nav" : ""
                        }
                        onClick={closeMenu}
                    >
                        Pricing
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "active-nav" : ""
                        }
                        onClick={closeMenu}
                    >
                        About
                    </NavLink>
                </li>

                {/* Mobile Buttons */}
                <div className="mobile-actions">

                    <button className="btn-outline">
                        <NavLink
                            to="/platform"
                            className="text-white"
                            onClick={closeMenu}
                        >
                            See Platform ◇
                        </NavLink>
                    </button>

                    <button className="btn-primary">
                        <NavLink
                            to="/bookademo"
                            className="text-dark active d-block text-center w-100"
                            onClick={closeMenu}
                        >
                            Book a Demo →
                        </NavLink>
                    </button>

                </div>

            </ul>

            {/* Desktop Buttons */}
            <div className="ml-nav-actions desktop-actions">

                <button className="btn-outline">
                    <NavLink
                        to="/platform"
                        className="text-white"
                    >
                        See Platform ◇
                    </NavLink>
                </button>

                <button className="btn-primary">
                    <NavLink
                        to="/bookademo"
                        className="text-dark"
                    >
                        Book a Demo →
                    </NavLink>
                </button>

            </div>

        </nav>
    );
}

export default Navbar;