import React from 'react'
import {Link} from 'react-router-dom'
//import '../stylesheets/navbar.scss'
const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/plants">My Plants</Link>
        </div>
    )
}

export default Navbar;