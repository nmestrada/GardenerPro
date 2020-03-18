import {Route, Switch} from 'react-router-dom'
import React from 'react'
import Calendar from './Calendar'
import Home from './Home'
import UserPlants from './UserPlants'

//perhaps can pass in components to create Routes?
//to avoid writing routes all time

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/calendar" component={Calendar}/>
            <Route path="/plants" component={UserPlants}/>
        </Switch>
    )
}

export default Routes;