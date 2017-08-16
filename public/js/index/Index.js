import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import config from '../main/config';
import {compare_created_at} from '../general/Utils';
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
        this.renderProgrammingBlocks();
        return (
            <main style={{opacity: 0}} ref={c => this.domElements.mainContainer = c}>
                <header className="landing-header">
                    <h1 className="landing-title title-regular title-white">
                        Glenn <br/>de Haan
                    </h1>
                    <h2 className="landing-title-sub title-small title-white">
                        Jr. DevOps Engineer <br/>Media Workflow Engineer <br/>Backend Developer
                    </h2>
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
                    <Link to="/about" className="cta fade-red shadow">More about me</Link>
                </section>
                <section className="landing-cards">
                    <h2 className="title-regular title-white align-center">I'm that guy with benefits ;)</h2>
                    {this.renderProgrammingBlocks()}
                </section>
                <footer className="footer">
                    <a href="tel:+31646453232" className="footer-anchor title-regular">+316 46 45 32 32</a>
                    <a href="mailto:glenn@dehaan.cloud" className="footer-anchor title-regular">glenn@dehaan.cloud</a>
                </footer>
            </main>
        );
    }

    renderProgrammingBlocks() {
        let items = config.programming.sort(compare_created_at);

        return (
            <div className="grid grid-landing grid-white">
                <a className="grid-item shadow" href={items[0].html_url} target="_blank">
                    <header className="item-header">
                        <h2 className="item-title title-regular">{items[0].name}</h2>
                    </header>
                    <p className="item-copy copy-grey">{items[0].description !== null ? items[0].description : 'Still trying to find a description'}</p>
                    <div className="item-anchor copy-grey">View on GitHub</div>
                </a>
                <a className="grid-item shadow" href={items[1].html_url} target="_blank">
                    <header className="item-header">
                        <h2 className="item-title title-regular">{items[1].name}</h2>
                    </header>
                    <p className="item-copy copy-grey">{items[1].description !== null ? items[1].description : 'Still trying to find a description'}</p>
                    <div className="item-anchor copy-grey">View on GitHub</div>
                </a>
                <a className="grid-item shadow" href={items[2].html_url} target="_blank">
                    <header className="item-header">
                        <h2 className="item-title title-regular">{items[2].name}</h2>
                    </header>
                    <p className="item-copy copy-grey">{items[2].description !== null ? items[2].description : 'Still trying to find a description'}</p>
                    <div className="item-anchor copy-grey">View on GitHub</div>
                </a>
                <a className="grid-item shadow" href={items[3].html_url} target="_blank">
                    <header className="item-header">
                        <h2 className="item-title title-regular">{items[3].name}</h2>
                    </header>
                    <p className="item-copy copy-grey">{items[3].description !== null ? items[3].description : 'Still trying to find a description'}</p>
                    <div className="item-anchor copy-grey">View on GitHub</div>
                </a>
            </div>
        );
    }
}
