import {h, render} from 'preact';
import mitt from 'mitt';

import config from './config';
import {loadState, saveState} from './utils/storage';
import {compareCreatedAt} from './utils/strings';
import fetch from './utils/fetch';
import Router from './components/Router';

/**
 * Function to fetch github API data
 */
const updateGithubData = () => {
    if(navigator.onLine !== false){
        new fetch("https://api.github.com/user/repos", (data) => {
            if(data.length > 0) {
                //Save data to state
                config.programming = data.sort(compareCreatedAt);
                saveState({projects: config.projects, programming: config.programming});
                window.site.events.emit('apiDataUpdate');
            }
        }, config.githubToken);
    }
};

/**
 * Function to fetch project API data
 */
const updateApiData = () => {
    if(navigator.onLine !== false){
        new fetch("https://api.glenndehaan.com/api/projects", (data) => {
            if(data.projects.length > 0) {
                //Save data to state
                config.projects = data.projects;
                saveState({projects: config.projects, programming: config.programming});
                window.site.events.emit('apiDataUpdate');
            }
        });
    }
};

/**
 * Load data from local storage
 * @type {Array}
 */
config.programming = loadState('programming') || [];
config.projects = loadState('projects') || [];

/**
 * Main initialize function
 */
const initialize = () => {
    updateGithubData();
    updateApiData();
    window.site = {};
    window.site.events = mitt();

    document.querySelector("#app").innerHTML = "";
    render(
        <Router/>,
        document.querySelector("#app")
    );
};

/**
 * Initialize the app
 */
initialize();
