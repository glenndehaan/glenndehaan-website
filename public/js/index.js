import {h, render} from 'preact';
import mitt from 'mitt';

import config from './main/config';
import {loadState, saveState} from './general/utils/storage';
import {compareCreatedAt} from './general/utils/strings';
import fetch from './general/utils/fetch';
import App from './app/App';

/**
 * Function to fetch github API data
 */
const updateGithubData = () => {
    if(config.network !== false){
        new fetch(config.github.url, (data) => {
            if(data.length > 0) {
                //Save data to state
                config.programming = data.sort(compareCreatedAt);
                saveState({projects: config.projects, programming: config.programming});
                window.site.events.emit('apiDataUpdate');
            }
        }, config.github.token);
    }
};

/**
 * Function to fetch project API data
 */
const updateApiData = () => {
    if(config.network !== false){
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
 * Add event listeners to check if the user is online
 */
window.addEventListener('online', () => {
    config.network = navigator.onLine;
});
window.addEventListener('offline', () => {
    config.network = navigator.onLine;
});

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
        <App/>,
        document.querySelector("#app")
    );
};

/**
 * Initialize the app
 */
initialize();
