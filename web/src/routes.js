import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import  InitalPage from './pages/initialPage/index'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={<InitalPage />} /> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes