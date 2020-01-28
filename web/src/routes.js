import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import  InitalPage from './pages/initialPage/index'
import AskPage from './pages/askPage/index'
import UserView from './components/Users/index'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <InitalPage />
                </Route> 
                <Route path='/questions'>
                    <AskPage />
                </Route>
                <Route path='/ranking'>
                    <UserView />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes