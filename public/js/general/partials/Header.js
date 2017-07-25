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
            <header className="header">

                <Link className="home-anchor" to="/">
                    <h1 className="page-title">
                        <figure className="logo">
                            <img src="images/design/glenn-de-haan.jpg" alt="logo" />
                        </figure>
                        Glenn de Haan
                    </h1>
                </Link>

                <nav className="nav-page">
                    <Link className="page-anchor" to="/projects">
                        Projects
                    </Link>
                    <Link className="page-anchor" to="/programming">
                        Programming
                    </Link>
                    <Link className="page-anchor" to="/about">
                        About
                    </Link>
                </nav>

                <nav className="nav-social">
                    <a className="social-anchor" href="https://github.com/glenndehaan" target="_blank">
                        <span>GitHub</span>
                    </a>
                    <a className="social-anchor" href="https://www.linkedin.com/in/glenndehaan/" target="_blank">
                        <span>LinkedIn</span>
                    </a>
                </nav>

            </header>
        )
    }
}
