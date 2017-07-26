import React from 'react';
import {Router, Route, Switch} from 'react-router';
import {TransitionSwitch} from 'react-router-v4-transition';

import createHistory from 'history/createBrowserHistory';

import {Header} from "../general/partials/Header";

import Projects from "../projects/Index";
import Programming from "../programming/Index";
import About from "../about/Index";
import {Index} from "../index/Index";
import {NotFound} from "../general/NotFound";

/**
 * The router function returns the Router component with our defined routes and parameters
 * @see https://github.com/ReactTraining/react-router
 * @param history - The history object as defined in App.js
 * @return {XML}
 */
export default () => {
    const history = createHistory();

    return (
        <Router history={history}>
            <div>
                <Header />
                <div className="container">
                    <TransitionSwitch parallel={false}>
                        <Route exact path="/" component={Index}/>
                        <Route exact path="/projects" component={Projects}/>
                        <Route exact path="/programming" component={Programming}/>
                        <Route exact path="/about" component={About}/>
                        <Route path="notfound" component={NotFound}/>
                        <Route path="*" component={NotFound}/>
                    </TransitionSwitch>
                </div>
            </div>
        </Router>
    )
};
