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
                <h3 className="visually-hidden">Programming</h3>
                <div className="grid">
                    {config.programming.map((item, key) => (
                        <a className="grid-item" href={item.url} target="_blank" key={key}>
                            <header className="item-header">
                                <h2 className="item-title title-medium">{item.name}</h2>
                            </header>
                            <p className="item-copy copy-grey">{item.description !== null ? item.description : 'Still trying to find a description'}</p>
                            <div className="item-anchor copy-grey">View on GitHub</div>
                        </a>
                    ))}
                </div>
            </main>
        );
    }
}
