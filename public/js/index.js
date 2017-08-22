//Ensure we have Promise and Object.assign polyfilled by including the right polyfills before any other code
import 'core-js/es6/promise';
import 'core-js/fn/object/assign';

import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {BrowserRouter} from 'react-router-dom';
import mitt from 'mitt';

import config from './main/config';
import {loadState, saveState} from './main/storage';
import {compare_created_at} from './general/Utils';
import github from './general/utils/github';
import api from './general/utils/api';

import Root from './main/Root'

const render = Component => {
    updateGithubData();
    updateApiData();
    site.events = mitt();

    ReactDOM.render(
        <AppContainer>
            <BrowserRouter>
                <Component />
            </BrowserRouter>
        </AppContainer>,
        document.getElementById('app')
    )
};

const updateGithubData = () => {
    if(config.network !== false){
        new github(config.github.url, config.github.token, (data) => {
            if(data.length > 0) {
                //Save data to state
                config.programming = data.sort(compare_created_at);
                saveState({projects: config.projects, programming: config.programming});
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
window.site = {};

render(Root);

if (module.hot) {
    module.hot.accept('./main/Root', () => {
        render(Root)
    })
}
