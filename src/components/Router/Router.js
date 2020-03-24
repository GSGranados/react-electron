import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from '../../App';
import About from '../About/About';

export const Router = () => {
    return (
        <div>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route path="/about" component={About}></Route>
            </Switch>
        </HashRouter>
            
        </div>
    )
}
