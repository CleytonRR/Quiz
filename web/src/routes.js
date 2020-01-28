import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import  InitalPage from './pages/initialPage/index'
import AskPage from './pages/askPage/index'
import RankingPage from './pages/rankingPage/index'

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
                    <RankingPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes