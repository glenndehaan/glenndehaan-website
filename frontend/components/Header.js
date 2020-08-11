import {h, Component} from 'preact';
import { connect } from 'unistore/preact';

import Link from './Link';
import Icon from './icons';

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
                    <span className="page-title">
                        <figure className="logo">
                            <img src="/images/design/glenn-de-haan-icon.jpg" alt="logo" />
                        </figure>
                        Glenn de Haan
                    </span>
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
                        <Icon type="github" />
                        <span>GitHub</span>
                    </a>
                    <a className="social-anchor" href="https://www.linkedin.com/in/glenndehaan/" target="_blank" rel="noopener noreferrer">
                        <Icon type="linkedin" />
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
