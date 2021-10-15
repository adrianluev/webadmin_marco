import React from 'react'

import { Route, Switch} from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Costumers from '../pages/Costumers'
import Login from '../pages/Login'



const Routes = () => {
    return (
        <Switch>
            <Route path = '/exposiciones' exact component={Dashboard}/>
            <Route path = '/costumers' component={Costumers}/>
            <Route path='/login' component={Login} />
        </Switch>
    )
}

export default Routes
