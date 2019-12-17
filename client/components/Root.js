import React, {Component} from 'react'
import Calendar from './Calendar'
class Root extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="navbar">
                    Navbar
                </div>
                <div id="container">Plants</div>
                <div id="calendar">
                    <Calendar/>
                </div>
            </React.Fragment>
        )
    }
}

export default Root;