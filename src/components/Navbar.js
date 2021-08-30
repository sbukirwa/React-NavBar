import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom'; 

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    let url="";

    return (
        <nav
            className="navbar is-primary"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container">
                <div className="navbar-brand">
                    <a
                        href={url}
                        role="button"
                        className={`navbar-burger burger ${isOpen && "is-active"}`}
                        aria-label="menu"
                        aria-expanded="false"
                        onClick={() => setOpen(!isOpen)}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className={`navbar-menu ${isOpen && "is-active"}`}>
                    <div className="navbar-start">
                        <Router className="navbar-item" activeClassName="is-active" to="/">
                            Home
                        </Router>

                        <Router
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/about"
                        >
                            About
                        </Router>

                        <Router
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/profile"
                        >
                            Profile
                        </Router>

                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                 <a  href={url} className="button is-white">Log in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;