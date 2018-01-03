import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LinkedinIcon from './svg/LinkedinIcon';
import GithubIcon from './svg/GithubIcon';

/**
 * Presentational part of the component
 * @constructor
 */
export class Header extends Component {
    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.domElements = {
            menuLinks: []
        };

        this.state = {
            homeLink: false,
            projectsLink: false,
            programmingLink: false,
            aboutLink: false
        };

        site.events.on('historyChange', e => this.updateActiveLink(e) );
    }

    updateActiveLink(path){
        for(let item = 0; item < this.domElements.menuLinks.length; item++){
            if(this.domElements.menuLinks[item].link === path){
                this.setState({[this.domElements.menuLinks[item].name]: true});
            }else{
                this.setState({[this.domElements.menuLinks[item].name]: false});
            }
        }
    }

    componentDidMount(){
        this.updateActiveLink(window.location.pathname);
    }

    /**
     * React's Render function, should return a single child element
     * @see https://facebook.github.io/react/docs/react-component.html#render
     * @return {XML}
     */
    render() {
        return (
            <header className="header">

                <Link className={["home-anchor", this.state.homeLink ? 'is-active' : ''].join(' ')} to="/" ref={(c) => this.domElements.menuLinks.push({link: '/', element: c, name: 'homeLink'})}>
                    <h1 className="page-title">
                        <figure className="logo">
                            <img src="/images/design/glenn-de-haan.jpg" alt="logo" />
                        </figure>
                        Glenn de Haan
                    </h1>
                </Link>

                <nav className="nav-page">
                    <Link className={["page-anchor", this.state.projectsLink ? 'is-active' : ''].join(' ')} to="/projects" ref={(c) => this.domElements.menuLinks.push({link: '/projects', element: c, name: 'projectsLink'})}>
                        Projects
                    </Link>
                    <Link className={["page-anchor", this.state.programmingLink ? 'is-active' : ''].join(' ')} to="/programming" ref={(c) => this.domElements.menuLinks.push({link: '/programming', element: c, name: 'programmingLink'})}>
                        Programming
                    </Link>
                    <Link className={["page-anchor", this.state.aboutLink ? 'is-active' : ''].join(' ')} to="/about" ref={(c) => this.domElements.menuLinks.push({link: '/about', element: c, name: 'aboutLink'})}>
                        About
                    </Link>
                </nav>

                <nav className="nav-social">
                    <a className="social-anchor" href="https://github.com/glenndehaan" target="_blank" rel="noopener">
                        <GithubIcon/>
                        <span>GitHub</span>
                    </a>
                    <a className="social-anchor" href="https://www.linkedin.com/in/glenndehaan/" target="_blank" rel="noopener">
                        <LinkedinIcon/>
                        <span>LinkedIn</span>
                    </a>
                </nav>

            </header>
        )
    }
}
