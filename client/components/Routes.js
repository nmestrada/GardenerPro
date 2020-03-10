import {Route, Switch} from 'react-router-dom'
import React from 'react'
//perhaps can pass in components to create Routes?
//to avoid writing routes all time

const Routes = () => {
    return (
        <Switch>
            <Route path="/calendar" component={Calendar}/>
            <Route path="/plants" components={UserPlants}/>
        </Switch>
    )
}

export default Routes;