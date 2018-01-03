import React, {Component} from 'react';
import config from '../main/config';
import {mainIntro, pageIntro, pageOutro} from '../general/animations/pageTransitions';

/**
 * Presentational part of the component
 * @constructor
 */
export default class About extends Component {
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
        document.title = `About | ${config.siteName}`;
        site.events.emit('historyChange', '/about');
    }

    /**
     * React's Render function, should return a single child element
     * @see https://facebook.github.io/react/docs/react-component.html#render
     * @return {XML}
     */
    render() {
        return (
            <main style={{opacity: 0}} className="cols-two" ref={c => this.domElements.mainContainer = c}>
                <div className="col-item col-person">
                    <figure className="portrait">
                        <img src="images/design/glenn-de-haan.jpg" alt="logo" />
                    </figure>
                    <nav className="contacts">
                        <a className="contact-anchor tel" href="tel:+31646453232">+316 46 45 32 32</a>
                        <a className="contact-anchor mail" href="mailto:glenn@dehaan.cloud">glenn@dehaan.cloud</a>
                    </nav>
                    <div className="about-copy">
                        <p>
                            Hi, and welcome! Sounds old doesn't it. Well here we go:
                        </p>
                        <p>
                            I am Glenn de Haan born on 11-11-1997 in Rotterdam, The Netherlands.
                        </p>
                        <p>
                            I recently graduated on the GLR in Rotterdam as Media Workflow Manager. And in my daily life I work in the IT sector. Not only the IT sector but also the Media Sector. Stage Engineering is also something I really like to do.
                        </p>
                        <p>
                            As you can hear I am someone who likes to do a lot. In my spare time i'm Coding, Gaming and practicing Bowling.
                        </p>
                        <p>
                            On the subject of coding; I started programming at middle school. Back then I learned basic Python, HTML, CSS and PHP.
                        </p>
                        <p>
                            When I started working at DPDK I started with Phalcon, Javascript, NodeJS and much more.
                        </p>
                        <p>
                            Next to programming I like to work with servers. And creating/setting up new networks is something that makes me proud of myself.
                        </p>
                        <p>
                            I also like working in teams and helping out others with their problems.
                        </p>
                        <p>
                            To check out more things I did use the menu to navigate to my other pages. Also follow me on GitHub and add me to your LinkedIn network.
                        </p>
                    </div>
                </div>

                <div className="col-item col-timeline">
                    <header className="timeline-header">
                        <h2 className="timeline-title title-regular title-white">
                            Certification & Education
                        </h2>
                    </header>
                    <div className="timeline">
                        {config.certification.map((item, key) => (
                            <div className="timeline-item" key={key}>
                                <h3 className="item-title title-regular title-white">{item.name}</h3>
                                <p className="copy-white">Provider: {item.provider}</p>
                                <a className="item-anchor copy-white" href={item.certificate} target="_blank" rel="noopener">View certificate</a>
                            </div>
                        ))}

                        {config.education.map((item, key) => (
                            <div className="timeline-item" key={key}>
                                {/*<img src={item.logo} />*/}
                                <h3 className="item-title title-regular title-white">{item.name}</h3>
                                <p className="copy-white">Study: {item.study}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        );
    }
}
