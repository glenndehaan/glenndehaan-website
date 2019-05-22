import './utils/polyfills';
import {h, render} from 'preact';
import {Provider} from 'unistore/preact';

import config from './config';

import store from './modules/store';
import storage from './modules/storage';

import {compareCreatedAt} from './utils/strings';
import fetch from './utils/fetch';

import Router from './components/Router';

/**
 * Function to fetch GitHub API data
 */
const updateGithubData = () => {
    if(navigator.onLine !== false){
        new fetch("https://api.github.com/user/repos?affiliation=owner&visibility=public", (data) => {
            if(data.length > 0) {
                // Save data to state
                const sortedData = data.sort(compareCreatedAt).filter(item => !item.fork);
                storage.set("programming", sortedData);

                store.setState({
                    programming: sortedData
                });
            }
        }, config.general.githubToken);
    }
};

/**
 * Initialize the app
 */
updateGithubData();

document.querySelector('#app').innerHTML = "";
render(<Provider store={store}><Router/></Provider>, document.querySelector('#app'));
require('preact/debug');
