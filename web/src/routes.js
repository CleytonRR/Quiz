import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import  InitalPage from './pages/initialPage/index'

function Hello () {
    return (
        <h1>Oie</h1>
    )
}

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <InitalPage />
                </Route> 
                <Route path='/questions'>
                    <Hello />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes