import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to="/calendar">Calendar</Link>
            <Link to="/plants">My Plants</Link>
        </nav>
    )
}