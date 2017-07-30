import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import config from '../main/config';
import {mainIntro, pageIntro, pageOutro} from '../general/animations/pageTransitions';

/**
 * Presentational part of the component
 * @constructor
 */
export default class Projects extends Component {
    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);
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

    /**
     * React's Render function, should return a single child element
     * @see https://facebook.github.io/react/docs/react-component.html#render
     * @return {XML}
     */
    render() {
        return (
            <main style={{opacity: 0}} ref={c => this.domElements.mainContainer = c}>
                {/*<h1>Projects</h1>*/}
                <div className="mosaic">
                    {config.projects.map((item, key) => (
                        <Link className="mosaic-item" to={`/project/${item.path}`} key={key}>
                            <h2>{item.name}</h2>
                            <p>{item.intro}</p>
                            <div>Read more</div>
                        </Link>
                    ))}
                    {config.projects.map((item, key) => (
                        <Link className="mosaic-item" to={`/project/${item.path}`} key={key}>
                            <h2>{item.name}</h2>
                            <p>{item.intro}</p>
                            <div>Read more</div>
                        </Link>
                    ))}
                    {config.projects.map((item, key) => (
                        <Link className="mosaic-item" to={`/project/${item.path}`} key={key}>
                            <h2>{item.name}</h2>
                            <p>{item.intro}</p>
                            <div>Read more</div>
                        </Link>
                    ))}
                    {config.projects.map((item, key) => (
                        <Link className="mosaic-item" to={`/project/${item.path}`} key={key}>
                            <h2>{item.name}</h2>
                            <p>{item.intro}</p>
                            <div>Read more</div>
                        </Link>
                    ))}
                    {config.projects.map((item, key) => (
                        <Link className="mosaic-item" to={`/project/${item.path}`} key={key}>
                            <h2>{item.name}</h2>
                            <p>{item.intro}</p>
                            <div>Read more</div>
                        </Link>
                    ))}
                </div>
            </main>
        );
    }
}
