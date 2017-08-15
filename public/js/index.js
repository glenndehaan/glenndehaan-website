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
import github from './general/utils/github';

import Root from './main/Root'

const render = Component => {
    updateGithubData();
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
                config.programming = data;
                saveState({programming: config.programming});
            }
        });
    }
};

//Load states
config.programming = loadState('programming') || [];

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
