import React, {Component} from 'react';
import {Link} from 'react-router-dom';

/**
 * Presentational part of the component
 * @constructor
 */
export class Header extends Component {
    /**
     * React's Render function, should return a single child element
     * @see https://facebook.github.io/react/docs/react-component.html#render
     * @return {XML}
     */
    render() {
        return (
            <header>
                <nav>
                    <Link to="/"><img src="images/icon/logo_144x144.png" height="40px" alt="logo" /> Glenn de Haan</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/programming">Programming</Link>
                    <Link to="/about">About</Link>
                    <a href="https://github.com/glenndehaan" target="_blank">GitHub</a>
                    <a href="https://www.linkedin.com/in/glenndehaan/" target="_blank">LinkedIn</a>
                </nav>
            </header>
        )
    }
}
