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
                    <h2 className="landing-title-sub title-small title-white">
                        Jr. DevOps Engineer <br/>Media Workflow Engineer <br/>Backend Developer
                    </h2>
                    {/*<Link to="/about">About</Link>*/}
                </header>
                <section className="landing-skills">
                    <ul className="skills-list">
                        <li className="skill">
                            <h4 className="title-small">PHP</h4>
                        </li>
                        <li className="skill">
                            <h4 className="title-small">Windows Server</h4>
                        </li>
                        <li className="skill">
                            <h4 className="title-small">Javascript</h4>
                        </li>
                        <li className="skill">
                            <h4 className="title-small">Interactive Installations</h4>
                        </li>
                        <li className="skill">
                            <h4 className="title-small">Java</h4>
                        </li>
                    </ul>
                    <ul className="skills-list">
                        <li className="skill">
                            <h4 className="title-small">Streaming</h4>
                        </li>
                        <li className="skill">
                            <h4 className="title-small">Node.js</h4>
                        </li>
                        <li className="skill">
                            <h4 className="title-small">Linux / Ubuntu / Debian</h4>
                        </li>
                        <li className="skill">
                            <h4 className="title-small">Networking</h4>
                        </li>
                    </ul>
                    <a href="#" className="cta fade-red shadow">More about me</a>
                </section>
                <section className="landing-cards">
                    <h2 className="title-regular title-white align-center">I'm that guy with benefits ;)</h2>
                    <div className="grid grid-landing grid-white">
                        <a className="grid-item shadow" href="" target="_blank">
                            <header className="item-header">
                                <h2 className="item-title title-regular">esports-api</h2>
                            </header>
                            <p className="item-copy copy-grey">A public api getting you the latest stats in Esports</p>
                            <div className="item-anchor copy-grey">View on GitHub</div>
                        </a>
                        <a className="grid-item shadow" href="" target="_blank">
                            <header className="item-header">
                                <h2 className="item-title title-regular">esports-api</h2>
                            </header>
                            <p className="item-copy copy-grey">A public api getting you the latest stats in Esports</p>
                            <div className="item-anchor copy-grey">View on GitHub</div>
                        </a>
                        <a className="grid-item shadow" href="" target="_blank">
                            <header className="item-header">
                                <h2 className="item-title title-regular">esports-api</h2>
                            </header>
                            <p className="item-copy copy-grey">A public api getting you the latest stats in Esports</p>
                            <div className="item-anchor copy-grey">View on GitHub</div>
                        </a>
                        <a className="grid-item shadow" href="" target="_blank">
                            <header className="item-header">
                                <h2 className="item-title title-regular">esports-api</h2>
                            </header>
                            <p className="item-copy copy-grey">A public api getting you the latest stats in Esports</p>
                            <div className="item-anchor copy-grey">View on GitHub</div>
                        </a>
                    </div>
                </section>
                <footer className="footer">
                    <a href="" className="footer-anchor title-regular">+641912345</a>
                    <a href="" className="footer-anchor title-regular">glenn.de.haan@dpdk.com</a>
                </footer>
            </main>
        );
    }
}
