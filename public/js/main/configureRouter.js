import React from 'react';
import {Route} from 'react-router-dom';
import {TransitionSwitch} from 'react-router-v4-transition';

import {Header} from "../general/partials/Header";

import Projects from "../projects/Index";
import Project from "../projects/Deeplink";
import Programming from "../programming/Index";
import About from "../about/Index";
import {Index} from "../index/Index";
import {NotFound} from "../general/NotFound";

/**
 * The router function returns the Router component with our defined routes and parameters
 * @see https://github.com/ReactTraining/react-router
 * @return {XML}
 */
export default () => {
    return (
        <div>
            <Header />
            <div className="container">
                <TransitionSwitch parallel={false}>
                    <Route exact path="/" component={Index}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Route exact path="/project/:path" component={Project}/>
                    <Route exact path="/programming" component={Programming}/>
                    <Route exact path="/about" component={About}/>
                    <Route path="notfound" component={NotFound}/>
                    <Route path="*" component={NotFound}/>
                </TransitionSwitch>
            </div>
        </div>
    )
};
