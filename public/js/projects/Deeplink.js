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
        document.title = `${this.content.name} | ${config.siteName}`;
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
        this.url = window.location.pathname.split('/').slice(-1)[0];
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
                <main style={{opacity: 0}} ref={c => this.domElements.mainContainer = c}>
                    <Link to="/projects">Back to projects overview</Link>

                    <h1>{this.content.name}</h1>
                    {this.content.content.map((item, key) => {
                        if(item.type === "text"){
                            return (
                                <div key={key}>
                                    <p>{item.text}</p>
                                </div>
                            )
                        }

                        if(item.type === "image"){
                            return (
                                <div key={key}>
                                    <img src={item.image_src} alt={item.image_alt} />
                                    {item.image_title ? <span>{item.image_title}</span> : ''}
                                </div>
                            )
                        }

                        if(item.type === "video"){
                            if(item.video_service === "youtube") {
                                return (
                                    <div key={key}>
                                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${item.video_code}`} frameBorder="0" allowFullScreen />
                                    </div>
                                )
                            }

                            if(item.video_service === "vimeo") {
                                return (
                                    <div key={key}>
                                        <iframe src={`https://player.vimeo.com/video/${item.video_code}`} width="100%" height="100%" frameBorder="0" allowFullScreen />
                                    </div>
                                )
                            }
                        }
                    })}
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
