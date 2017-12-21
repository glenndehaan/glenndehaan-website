import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import config from '../main/config';
import {mainIntro, pageIntro, pageOutro} from '../general/animations/pageTransitions';

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
        this.url = null;
        this.content = null;
        this.domElements = {
            mainContainer: null
        };
    }

    /**
     * Initial load
     * @param callback
     */
    componentWillAppear(callback) {
        //do something when the component will appear
        mainIntro(callback, this.domElements);
    }

    /**
     * On load
     * @param callback
     */
    componentWillEnter(callback) {
        //do something when the component will appear
        pageIntro(callback, this.domElements);
    }

    /**
     * On leave
     * @param callback
     */
    componentWillLeave(callback) {
        //do something when the component will appear
        pageOutro(callback, this.domElements);
    }

    componentDidMount(){
        document.title = `${this.content.title} | ${config.siteName}`;
        site.events.emit('historyChange', '/projects');
    }

    /**
     * Search for path
     * @param path
     * @param projects
     * @return {*}
     */
    searchProject(path, projects){
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].path === path) {
                return projects[i];
            }

            if(i === (projects.length - 1)){
                return false;
            }
        }
    }

    /**
     * Function to run then the component mounts
     */
    componentWillMount(){
        //Define deeplink
        this.url = this.props.location.pathname;
        console.log('this.url', this.url);

        //Get content
        this.content = this.searchProject(this.url, config.projects);
        console.log('this.content', this.content);
    }

    /**
     * React's Render function, should return a single child element
     * @see https://facebook.github.io/react/docs/react-component.html#render
     * @return {XML}
     */
    render() {
        if(this.content){
            return (
                <main className="project" style={{opacity: 0}} ref={c => this.domElements.mainContainer = c}>
                    <Link className="button-back" to="/projects">
                        <span>Projects overview</span>
                    </Link>
                    <figure className="project-hero box-cover">
                        <figcaption className="hero-title">
                            {this.content.publish_date &&
                                <p className="project-date copy-grey copy-small">
                                    {this.content.publish_date}
                                </p>
                            }
                            <h1 className="title-large project-name">
                                {this.content.title}
                            </h1>
                            <p className="project-intro copy-grey copy-accent">
                                {this.content.intro}
                            </p>
                            {this.content.project_link &&
                                <a className="project-anchor" href={this.content.project_link} target="_blank">
                                    Visit project
                                </a>
                            }
                        </figcaption>
                        {this.content.image_src &&
                            <div className="hero-shot">
                                {/*<img className="media-cover" src={this.content.image_src} alt={this.content.image_alt}/>*/}
                                <picture>
                                    <source srcSet="http://via.placeholder.com/350x65" media="(min-width: 600px)"/>
                                    <img src="http://via.placeholder.com/350x150" alt="MDN"/>
                                </picture>
                            </div>
                        }
                    </figure>
                    <section className="project-body">
                        {this.content.content.map((item, key) => {
                            if(item.type === "copy"){
                                return (
                                    <div className="box small-width content-unit wysiwyg" key={key} dangerouslySetInnerHTML={{__html: item.text}} />
                                )
                            }

                            if(item.type === "image"){
                                return (
                                    <figure className="box medium-width content-media content-unit" key={key}>
                                        {item.image_title &&
                                            <figcaption className="media-caption">
                                                {<h5 className="title-small title-grey">{item.image_title}</h5>}
                                            </figcaption>
                                        }
                                        <div className="media-item">
                                            <img className="media-scale" src={item.image_src} alt={item.image_alt} />
                                        </div>
                                    </figure>
                                )
                            }

                            if(item.type === "video"){
                                if(item.video_service === "youtube") {
                                    return (
                                        <div className="box medium-width content-unit" key={key}>
                                            <div className="vid-wrap">
                                                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${item.video_embed_code}`} frameBorder="0" allowFullScreen />
                                            </div>
                                        </div>
                                    )
                                }

                                if(item.video_service === "vimeo") {
                                    return (
                                        <div className="box-fill" key={key}>
                                            <iframe src={`https://player.vimeo.com/video/${item.video_embed_code}`} width="100%" height="100%" frameBorder="0" allowFullScreen />
                                        </div>
                                    )
                                }
                            }
                        })}
                    </section>
                </main>
            );
        }else{
            return (
                <main className="page not-found" ref={(c) => this.domElements.mainContainer = c}>
                    <h1 className="page-title">404</h1>
                    <div className="page-subtitle">Pagina niet gevonden!</div>
                </main>
            )
        }
    }
}
