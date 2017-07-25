import React, {Component} from 'react';

import {TweenMax} from 'gsap';

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
                Jeeeee this is the index
            </main>
        );
    }

    /**
     * Invoked once after the initial rendering occurs
     * @see https://facebook.github.io/react/docs/react-component.html#componentdidmount
     * @return {void}
     */
    componentDidMount() {
        TweenMax.to(this.mainContainer, 1.2, {
            y: 0
        });

        TweenMax.to(this.mainContainer, 2, {
            opacity: 1
        });
    }
}
