import React, {Component} from 'react';

/**
 * Presentational part of the component
 * @constructor
 */
export class NotFound extends Component {
    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.element = null;
    }

    /**
     * React's Render function, should return a single child element
     * @see https://facebook.github.io/react/docs/react-component.html#render
     * @return {XML}
     */
    render() {
        return (
            <main className="page not-found" ref={(c) => this.element = c}>
                <h1 className="page-title">404</h1>
                <div className="page-subtitle">Pagina niet gevonden!</div>
            </main>
        )
    }
}
