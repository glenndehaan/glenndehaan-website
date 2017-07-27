import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {mainIntro, pageIntro, pageOutro} from '../general/animations/pageTransitions';

/**
 * Presentational part of the component
 * @constructor
 */
export class Index extends Component {
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

    /**
     * React's Render function, should return a single child element
     * @see https://facebook.github.io/react/docs/react-component.html#render
     * @return {XML}
     */
    render() {
        return (
            <main style={{opacity: 0}} ref={c => this.domElements.mainContainer = c}>
                <header className="landing-header">
                    <h1 className="title-large landing-title">
                        Glenn <br/>de Haan
                    </h1>
                    <h2 className="title-small landing-title-sub">
                        Jr. DevOps Engineer / Media Workflow Engineer / Backend Developer
                    </h2>
                </header>
                <div className="tag-boxes">
                    <h3 className="tag-title title-medium">
                        Skills lorem ipsum dolor sit
                    </h3>
                    <h4 className="tag-title title-medium">
                        PHP
                    </h4>
                    <h4 className="tag-title title-medium">
                        React
                    </h4>
                    <h4 className="tag-title title-medium">
                        jQuery
                    </h4>
                    <h4 className="tag-title title-medium">
                        javaScript
                    </h4>
                    <h4 className="tag-title title-medium">
                        Node.js
                    </h4>
                </div>
                <Link to="/about">About</Link>
            </main>
        );
    }
}
