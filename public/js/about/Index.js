import React, {Component} from 'react';
import config from '../main/config';

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
        this.mainContainer = null;
    }

    /**
     * React's Render function, should return a single child element
     * @see https://facebook.github.io/react/docs/react-component.html#render
     * @return {XML}
     */
    render() {
        return (
            <main className="cols-two" ref={c => this.mainContainer = c}>
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

                <div className="col-item">
                    <header className="timeline-header">
                        <h2 className="timeline-title">
                            certification | education
                        </h2>
                    </header>
                    <div className="timeline">
                        {config.certification.map((item, key) => (
                            <div className="timeline-item" key={key}>
                                <img src={item.logo} />
                                <span>{item.name}</span>
                                <p>Provider: {item.provider}</p>
                                <a href={item.certificate} target="_blank">View certificate</a>
                            </div>
                        ))}

                        {config.education.map((item, key) => (
                            <div className="timeline-item" key={key}>
                                <img src={item.logo} />
                                <span>{item.name}</span>
                                <p>Study: {item.study}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        );
    }
}
