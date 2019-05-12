import {h, Component} from 'preact';
import { connect } from 'unistore/preact';

import Link from './Link';
import LinkedinIcon from './icons/Linkedin';
import GithubIcon from './icons/Github';

class Header extends Component {
    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        return (
            <header className="header">
                <Link className={["home-anchor", this.props.router.url === '/' ? 'is-active' : ''].join(' ')} href="/">
                    <h1 className="page-title">
                        <figure className="logo">
                            <img src="/images/design/glenn-de-haan-icon.jpg" alt="logo" />
                        </figure>
                        Glenn de Haan
                    </h1>
                </Link>

                <nav className="nav-page">
                    <Link className={["page-anchor", this.props.router.url.includes('/project') ? 'is-active' : ''].join(' ')} href="/project">
                        Projects
                    </Link>
                    <Link className={["page-anchor", this.props.router.url === '/programming' ? 'is-active' : ''].join(' ')} href="/programming">
                        Programming
                    </Link>
                    <Link className={["page-anchor", this.props.router.url === '/about' ? 'is-active' : ''].join(' ')} href="/about">
                        About
                    </Link>
                </nav>

                <nav className="nav-social">
                    <a className="social-anchor" href="https://github.com/glenndehaan" target="_blank" rel="noopener noreferrer">
                        <GithubIcon/>
                        <span>GitHub</span>
                    </a>
                    <a className="social-anchor" href="https://www.linkedin.com/in/glenndehaan/" target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon/>
                        <span>LinkedIn</span>
                    </a>
                </nav>
            </header>
        )
    }
}

/**
 * Connect the store to the component
 */
export default connect('router')(Header);
