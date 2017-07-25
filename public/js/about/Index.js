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
            <main ref={c => this.mainContainer = c}>
                {config.certification.map((item, key) => (
                    <div key={key}>
                        <img src={item.logo} />
                        <span>{item.name}</span>
                        <p>Provider: {item.provider}</p>
                        <a href={item.certificate} target="_blank">View certificate</a>
                    </div>
                ))}

                {config.education.map((item, key) => (
                    <div key={key}>
                        <img src={item.logo} />
                        <span>{item.name}</span>
                        <p>Study: {item.study}</p>
                    </div>
                ))}
            </main>
        );
    }
}
