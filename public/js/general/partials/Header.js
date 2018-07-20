import {h, Component} from 'preact';
import {Link} from 'preact-router/match';
import LinkedinIcon from './svg/LinkedinIcon';
import GithubIcon from './svg/GithubIcon';

/**
 * Presentational part of the component
 * @constructor
 */
export default class Header extends Component {
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

        window.site.events.on('historyChange', e => this.updateActiveLink(e) );
    }

    /**
     * Update the active link
     * @param path
     */
    updateActiveLink(path){
        for(let item = 0; item < this.domElements.menuLinks.length; item++){
            if(this.domElements.menuLinks[item].link === path){
                this.setState({[this.domElements.menuLinks[item].name]: true});
            }else{
                this.setState({[this.domElements.menuLinks[item].name]: false});
            }
        }
    }

    /**
     * Invoked once after the initial rendering occurs
     * @see https://facebook.github.io/react/docs/react-component.html#componentdidmount
     * @return {void}
     */
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
                <Link className={["home-anchor", this.state.homeLink ? 'is-active' : ''].join(' ')} href="/" ref={(c) => this.domElements.menuLinks.push({link: '/', element: c, name: 'homeLink'})}>
                    <h1 className="page-title">
                        <figure className="logo">
                            <img src="/images/design/glenn-de-haan-icon.jpg" alt="logo" />
                        </figure>
                        Glenn de Haan
                    </h1>
                </Link>

                <nav className="nav-page">
                    <Link className={["page-anchor", this.state.projectsLink ? 'is-active' : ''].join(' ')} href="/project" ref={(c) => this.domElements.menuLinks.push({link: '/projects', element: c, name: 'projectsLink'})}>
                        Projects
                    </Link>
                    <Link className={["page-anchor", this.state.programmingLink ? 'is-active' : ''].join(' ')} href="/programming" ref={(c) => this.domElements.menuLinks.push({link: '/programming', element: c, name: 'programmingLink'})}>
                        Programming
                    </Link>
                    <Link className={["page-anchor", this.state.aboutLink ? 'is-active' : ''].join(' ')} href="/about" ref={(c) => this.domElements.menuLinks.push({link: '/about', element: c, name: 'aboutLink'})}>
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
