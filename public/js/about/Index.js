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

    /**
     * React's Render function, should return a single child element
     * @see https://facebook.github.io/react/docs/react-component.html#render
     * @return {XML}
     */
    render() {
        return (
            <main style={{opacity: 0}} className="cols-two" ref={c => this.domElements.mainContainer = c}>
                <div className="col-item">
                    <figure className="portrait">
                        <img src="images/design/glenn-de-haan.jpg" alt="logo" />
                    </figure>
                    <nav className="contacts">
                        <a className="contact-anchor tel" href="">+64123456</a>
                        <a className="contact-anchor mail" href="">glenn.de.haan@dpdk.com</a>
                    </nav>
                    <div className="about-copy">
                        <p>
                            I started programming when in my first year of school. I started with basic Python, HTML, CSS and PHP.
                        </p>
                        <p>
                            But after that one year I minimized the programming to a minimum. When I started working at DPDK I picked the pace up and started with Phalcon, Javascript, NodeJS, etc.
                        </p>
                        <p>
                            Below are all of my public GitHub repo's:
                        </p>
                    </div>
                </div>

                <div className="col-item col-timeline">
                    <header className="timeline-header">
                        <h2 className="timeline-title title-regular title-white">
                            certification & education
                        </h2>
                    </header>
                    <div className="timeline">
                        {config.certification.map((item, key) => (
                            <div className="timeline-item" key={key}>
                                {/*<img src={item.logo} />*/}
                                <h3 className="item-title title-regular">{item.name}</h3>
                                <p>Provider: {item.provider}</p>
                                <a className="item-anchor" href={item.certificate} target="_blank">View certificate</a>
                            </div>
                        ))}

                        {config.education.map((item, key) => (
                            <div className="timeline-item" key={key}>
                                {/*<img src={item.logo} />*/}
                                <h3 className="item-title title-regular">{item.name}</h3>
                                <p>Study: {item.study}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        );
    }
}
