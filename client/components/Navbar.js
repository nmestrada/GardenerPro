import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/plants">My Plants</Link>
        </div>
    )
}

export default Navbar;