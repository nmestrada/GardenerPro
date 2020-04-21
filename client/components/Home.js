import React from 'react'
import Login from './LoginSignup'
import '../stylesheets/home.scss'
const Home = () => {
    return(
        <div className="welcome">
            <div>Hello! Welcome to Urban Gardener Pro!</div>
            <p>About: Gardener Pro is for the busy urban gardener with not a lot of time but plants to take care of!</p>
            <Login/>
        </div>
    )
}

export default Home