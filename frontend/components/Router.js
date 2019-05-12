import {h, Component} from 'preact';
import { connect } from 'unistore/preact';
import {actions} from '../modules/store';

import {pageOutro} from '../utils/pageTransitions';
import routeObserver, {getBaseRoute} from '../utils/routing';

import Header from "./Header";

import Home from "../pages/Home";
import Programming from "../pages/Programming";
import Projects from "../pages/Projects";
import Project from "../pages/Project";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

class Router extends Component {
    /**
     * Constructor
     *
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            route: {
                current: getBaseRoute(),
                previous: null,
                url: window.location.pathname
            }
        }
    }

    /**
     * Runs then component mounts
     */
    componentDidMount() {
        // Observe route changes with a callback
        routeObserver((url) => this.onRouteChange(url));
    }

    /**
     * Update the route
     *
     * @param url
     */
    onRouteChange(url) {
        // Split the url in usable segments
        const current = url.split('/');
        if (current[current.length - 1] === '') current.pop();
        if (current[0] === '') current.shift();

        // Update the state with route data
        const previous = this.state.route.current;
        const route = {current, previous, url};

        // Let others know we are updating
        this.props.updateRouter(route);

        // Start outro when the component will leave
        if(this.state.route.url !== url) {
            pageOutro(() => {
                this.setState({route});
            }, {
                mainContainer: document.querySelector("main")
            });
        }
    }

    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    {this.renderMain(this.state)}
                </div>
            </div>
        );
    }

    /**
     * Render the main content
     *
     * @param state
     */
    renderMain(state) {
        const {url} = state.route;

        if(url === "/") {
            return <Home/>;
        }

        if(url === "/project") {
            return <Projects/>
        }

        if(url.includes("/project/")) {
            return <Project url={url}/>
        }

        if(url === "/programming") {
            return <Programming/>;
        }

        if(url === "/about") {
            return <About/>;
        }

        return <NotFound/>;
    }
}

/**
 * Connect the store to the component
 */
export default connect('router', actions)(Router);
