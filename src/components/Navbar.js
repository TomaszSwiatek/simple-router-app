import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push('/contact')
    // }, 6000)
    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper red darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo left navbar-logo">Sheep Times</Link>
                    <ul className="right " >
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}
// this is extra hoc which can give as eztra router power - props properties.
export default withRouter(Navbar)