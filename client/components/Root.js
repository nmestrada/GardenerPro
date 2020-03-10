import React, {Component} from 'react'
import Routes from './Routes'
import Navbar from './Navbar'

class Root extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Routes/>
            </>
        )
    }
}

export default Root;