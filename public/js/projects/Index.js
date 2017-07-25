import React, {Component} from 'react';

/**
 * Presentational part of the component
 * @constructor
 */
export default class Projects extends Component {
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
                Projects index
            </main>
        );
    }
}
