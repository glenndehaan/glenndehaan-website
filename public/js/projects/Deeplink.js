import {h, Component} from 'preact';
import Link from '../general/partials/Link';
import config from '../main/config';
import {pageIntro} from '../general/animations/pageTransitions';

/**
 * Presentational part of the component
 * @constructor
 */
export default class Deeplink extends Component {
    /**
     * Constructor
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

        window.site.events.on('apiDataUpdate', () => {
            this.setState({
                url: this.props.url,
                content: this.searchProject(this.props.url, config.projects)
            });
        });
    }

    /**
     * Invoked once after the initial rendering occurs
     * @see https://facebook.github.io/react/docs/react-component.html#componentdidmount
     * @return {void}
     */
    componentDidMount() {
        System.import('highlight.js').then(hljs => {
            this.setState({
                url: this.props.url,
                content: this.searchProject(this.props.url, config.projects)
            });

            document.title = `${this.state.content.title} | ${config.siteName}`;

            const codeElements = document.querySelectorAll('pre code');
            for (let block = 0; block < codeElements.length; block++) {
                hljs.highlightBlock(codeElements[block]);
            }

            //Start intro when the component will appear
            pageIntro(() => {}, this.domElements);
        });
    }

    /**
     * Search for path
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
     * React's Render function, should return a single child element
     * @see https://facebook.github.io/react/docs/react-component.html#render
     * @return {XML}
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
                            {this.state.content.project_link && (
                                <a
                                    className="project-anchor"
                                    href={this.state.content.project_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit project
                                </a>
                            )}
                        </figcaption>
                        {this.state.content.image.desktop.src &&
                        this.state.content.image.mobile.src && (
                            <div className="hero-shot">
                                <picture>
                                    <source
                                        srcSet={this.state.content.image.mobile.src}
                                        media="(max-width: 600px)"
                                    />
                                    <img
                                        className="media-cover"
                                        src={this.state.content.image.desktop.src}
                                        alt={this.state.content.image.desktop.alt}
                                    />
                                </picture>
                            </div>
                        )}
                    </figure>
                    <section className="project-body">
                        {this.state.content.content.map((item, key) => {
                            if (item.type === 'copy') {
                                return (
                                    <div
                                        className="box small-width content-unit wysiwyg"
                                        key={key}
                                        dangerouslySetInnerHTML={{__html: item.text}}
                                    />
                                );
                            }

                            if (item.type === 'image') {
                                return (
                                    <figure
                                        className="box medium-width content-media content-unit"
                                        key={key}
                                    >
                                        {item.image.desktop.title && (
                                            <figcaption className="media-caption">
                                                {
                                                    <h5 className="title-small title-grey">
                                                        {item.image.desktop.title}
                                                    </h5>
                                                }
                                            </figcaption>
                                        )}
                                        <div className="media-item">
                                            <picture>
                                                <source
                                                    srcSet={item.image.mobile.src}
                                                    media="(max-width: 600px)"
                                                />
                                                <img
                                                    className="media-scale"
                                                    src={item.image.desktop.src}
                                                    alt={item.image.desktop.alt}
                                                />
                                            </picture>
                                        </div>
                                    </figure>
                                );
                            }

                            if (item.type === 'video') {
                                if (item.video_service === 'youtube') {
                                    return (
                                        <div className="box medium-width content-unit" key={key}>
                                            <div className="vid-wrap">
                                                <iframe
                                                    width="100%"
                                                    height="100%"
                                                    src={`https://www.youtube.com/embed/${item.video_embed_code}`}
                                                    frameBorder="0"
                                                    allowFullScreen
                                                />
                                            </div>
                                        </div>
                                    );
                                }

                                if (item.video_service === 'vimeo') {
                                    return (
                                        <div className="box-fill" key={key}>
                                            <iframe
                                                src={`https://player.vimeo.com/video/${item.video_embed_code}`}
                                                width="100%"
                                                height="100%"
                                                frameBorder="0"
                                                allowFullScreen
                                            />
                                        </div>
                                    );
                                }
                            }
                        })}
                    </section>
                </main>
            );
        } else {
            return (
                <main className="page not-found" ref={c => (this.domElements.mainContainer = c)}>
                    <h1 className="page-title">404</h1>
                    <div className="page-subtitle">Pagina niet gevonden!</div>
                </main>
            );
        }
    }
}
