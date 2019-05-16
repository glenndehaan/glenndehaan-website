import {h, Component} from 'preact';

import config from '../config';
import Link from '../components/Link';
import {pageIntro} from '../utils/transitions';
import Lighthouse from '../components/lighthouse/Lighthouse';

export default class Project extends Component {
    /**
     * Constructor
     *
     * @param props
     */
    constructor(props) {
        super(props);

        this.domElements = {
            mainContainer: null
        };

        this.state = {
            url: this.props.url,
            content: this.searchProject(this.props.url, config.projects)
        };
    }

    /**
     * Runs then component mounts
     */
    componentDidMount() {
        this.setState({
            url: this.props.url,
            content: this.searchProject(this.props.url, config.projects)
        });

        if(this.state.content) {
            document.title = `${this.state.content.title} | ${config.general.siteName}`;
        } else {
            document.title = `Not Found | ${config.general.siteName}`;
        }

        //Start intro when the component will appear
        pageIntro(() => {}, this.domElements);
    }

    /**
     * Search for path
     *
     * @param path
     * @param projects
     * @return {*}
     */
    searchProject(path, projects) {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].path === path) {
                return projects[i];
            }

            if (i === projects.length - 1) {
                return false;
            }
        }

        return false;
    }

    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        if (this.state.content) {
            return (
                <main className="project" ref={c => (this.domElements.mainContainer = c)}>
                    <Link className="button-back" href="/project">
                        <span>Projects overview</span>
                    </Link>
                    <figure className="project-hero box-cover">
                        <figcaption className="hero-title">
                            {this.state.content.publish_date && (
                                <p className="project-date copy-grey copy-small">
                                    {this.state.content.publish_date}
                                </p>
                            )}
                            <h1 className="title-large project-name">{this.state.content.title}</h1>
                            <p className="project-intro copy-grey copy-accent">
                                {this.state.content.intro}
                            </p>
                            {this.state.content.link && (
                                <a
                                    className="project-anchor"
                                    href={this.state.content.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit project
                                </a>
                            )}
                        </figcaption>
                        <div className="hero-shot">
                            <picture>
                                <source
                                    srcSet={`/images/projects/${this.state.content.slug}_full.jpg`}
                                    media="(max-width: 600px)"
                                />
                                <img
                                    className="media-cover"
                                    src={`/images/projects/${this.state.content.slug}_full.jpg`}
                                    alt="Screenshot of the project"
                                />
                            </picture>
                        </div>
                    </figure>
                    <section className="project-body">
                        <div className="box small-width content-unit wysiwyg">
                            <strong>Awards</strong>
                        </div>
                        {this.state.content.lighthouse &&
                            <div className="box small-width content-unit">
                                <Lighthouse scores={this.state.content.lighthouse}/>
                            </div>
                        }
                    </section>
                </main>
            );
        } else {
            return (
                <main className="page not-found" ref={(c) => this.domElements.mainContainer = c}>
                    <h1 className="landing-title not-found-title">404 Page <br/>not found!</h1>
                </main>
            );
        }
    }
}
