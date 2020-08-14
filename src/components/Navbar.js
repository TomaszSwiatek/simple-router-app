import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper red darken-3">
                <div className="container">
                    <a href="#!" className="brand-logo left navbar-logo">Sheep Times</a>
                    <ul className="right " >
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Navbar