import React, {Component} from 'react';
import config from '../main/config';
import {mainIntro, pageIntro, pageOutro} from './animations/pageTransitions';

/**
 * Presentational part of the component
 * @constructor
 */
export class NotFound extends Component {
    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.domElements = {
            mainContainer: null
        };
    }

    /**
     * Initial load
     * @param callback
     */
    componentWillAppear(callback) {
        //do something when the component will appear
        mainIntro(callback, this.domElements);
    }

    /**
     * On load
     * @param callback
     */
    componentWillEnter(callback) {
        //do something when the component will appear
        pageIntro(callback, this.domElements);
    }

    /**
     * On leave
     * @param callback
     */
    componentWillLeave(callback) {
        //do something when the component will appear
        pageOutro(callback, this.domElements);
    }

    componentDidMount(){
        document.title = `Not Found | ${config.siteName}`;
        site.events.emit('historyChange', '');
    }

    /**
     * React's Render function, should return a single child element
     * @see https://facebook.github.io/react/docs/react-component.html#render
     * @return {XML}
     */
    render() {
        return (
            <main style={{opacity: 0}} className="page not-found" ref={(c) => this.domElements.mainContainer = c}>
                <h1 className="page-title">404</h1>
                <div className="page-subtitle">Page not found!</div>
            </main>
        )
    }
}
