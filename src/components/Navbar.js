import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper red darken-3">
                <div className="container">
                    <a href="#!" className="brand-logo left navbar-logo">Sheep Times</a>
                    <ul className="right navbar-list" >
                        <li><a href="/"></a>Home</li>
                        <li><a href="/about"></a>About</li>
                        <li><a href="/contact"></a>Contact</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar