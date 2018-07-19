import {h, render} from 'preact';
import Router from 'preact-router';
// import TransitionGroup from 'preact-transition-group';
import mitt from 'mitt';

import config from './main/config';
import {loadState, saveState} from './main/storage';
import {compare_created_at} from './general/Utils';
import github from './general/utils/github';
import api from './general/utils/api';

// import Root from './main/Root'
// import Project from "./projects/Deeplink";
import Programming from "./programming";
import About from "./about";
import {Index} from "./index/Index";
import {NotFound} from "./general/NotFound";
import Projects from "./projects";
import {Header} from "./general/partials/Header";

const main = () => {
    updateGithubData();
    updateApiData();
    window.site.events = mitt();

    render(
        <div>
            <Header />
            <div className="container">
                {/*<TransitionGroup>*/}
                <Router>
                    <Index path="/"/>
                    <Projects path="/project"/>
                    {/*<Project path="/project/:path"/>*/}
                    <Programming path="/programming"/>
                    <About path="/about"/>
                    <NotFound type="404" default/>
                </Router>
                {/*</TransitionGroup>*/}
            </div>
        </div>,
        document.querySelector("#app")
    );
};

const updateGithubData = () => {
    if(config.network !== false){
        new github(config.github.url, config.github.token, (data) => {
            if(data.length > 0) {
                //Save data to state
                config.programming = data.sort(compare_created_at);
                saveState({projects: config.projects, programming: config.programming});
                window.site.events.emit('apiDataUpdate');
            }
        });
    }
};

const updateApiData = () => {
    if(config.network !== false){
        new api("https://api.glenndehaan.com/api/projects", (data) => {
            if(data.length > 0) {
                //Save data to state
                config.projects = data;
                saveState({projects: config.projects, programming: config.programming});
                window.site.events.emit('apiDataUpdate');
            }
        });
    }
};

//Load states
config.programming = loadState('programming') || [];
config.projects = loadState('projects') || [];

window.addEventListener('online', () => {
    config.network = navigator.onLine;
});
window.addEventListener('offline', () => {
    config.network = navigator.onLine;
});
window.window.site = {};

main();
