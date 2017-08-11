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
                    <h1 className="landing-title title-regular title-white">
                        Glenn <br/>de Haan
                    </h1>
                    <h2 className="landing-title-sub title-regular title-white">
                        Jr. DevOps Engineer <br/>Media Workflow Engineer <br/>Backend Developer
                    </h2>
                    {/*<Link to="/about">About</Link>*/}
                </header>
                <div className="landing-grid">
                    <p className="tag-box tag-title">
                        PHP
                    </p>
                    <p className="tag-box tag-title">
                        Windows Server
                    </p>
                    <p className="tag-box tag-title">
                        Javascript
                    </p>
                    <p className="tag-box tag-title">
                        Interactive Installations
                    </p>
                    <p className="tag-box tag-title">
                        Java
                    </p>
                    <p className="tag-box tag-title">
                        Streaming
                    </p>
                    <p className="tag-box tag-title">
                        Node.js
                    </p>
                    <p className="tag-box tag-title">
                        Linux / Ubuntu / Debian
                    </p>
                    <p className="tag-box tag-title">
                        Networking
                    </p>
                </div>
            </main>
        );
    }
}
