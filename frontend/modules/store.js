import createUnistore from 'unistore';
import devtools from 'unistore/devtools';

import storage from './storage';
import {getBaseRoute} from "../utils/routing";

/**
 * Exports the store with the default state
 *
 * @return {any}
 */
const createStore = () => {
    const initialState = {
        router: {
            current: getBaseRoute(),
            previous: null,
            url: window.location.pathname
        },
        programming: storage.get("programming") || []
    };

    return process.env.NODE_ENV === 'production' ?  createUnistore(initialState) : devtools(createUnistore(initialState));
};

/**
 * All action for mutating the store
 *
 * @return {*}
 */
const actions = () => {
    return {
        setProgrammingData(state, payload) {
            return {
                programming: payload.programming
            };
        },
        updateRouter(state, payload) {
            return {
                router: payload
            };
        }
    };
};

export { actions };
export default createStore();
