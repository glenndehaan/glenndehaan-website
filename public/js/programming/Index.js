import React, {Component} from 'react';
import config from '../main/config';

/**
 * Presentational part of the component
 * @constructor
 */
export default class Programming extends Component {
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
            <main ref={c => this.mainContainer = c}>
                <h3>Programming</h3>
                <p>
                    I started programming when in my first year of school. I started with basic Python, HTML, CSS and PHP.<br/>
                    But after that one year I minimized the programming to a minimum.<br/>
                    When I started working at DPDK I picked the pace up and started with Phalcon, Javascript, NodeJS, etc.<br/>
                    Below are all of my public GitHub repo's:
                </p>
                <div>
                    {config.programming.map((item, key) => (
                        <div key={key}>
                            <span className="card-title">{item.name}</span>
                            <p>{item.description !== null ? item.description : 'Still trying to find a description'}</p>
                            <a href={item.url} target="_blank">View on GitHub</a>
                        </div>
                    ))}
                </div>
            </main>
        );
    }
}
