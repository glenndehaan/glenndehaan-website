import {h, Component} from 'preact';

import {pageOutro} from '../general/animations/pageTransitions';
import routeObserver, {getBaseRoute} from './../general/utils/routing';
import Header from "./../general/partials/Header";
import Home from "./../home";
import Programming from "./../programming";
import Projects from "./../projects";
// import Project from "./../projects/Deeplink";
import About from "./../about";
import NotFound from "./../general/NotFound";

export default class App extends Component {
    /**
     * Constructor
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
     * Invoked once after the initial rendering occurs
     * @see https://facebook.github.io/react/docs/react-component.html#componentdidmount
     * @return {void}
     */
    componentDidMount() {
        // Observe route changes with a callback
        routeObserver((url) => this.onRouteChange(url));
    }

    /**
     * Update the route
     * @param url
     */
    onRouteChange(url) {
        // Let others know we are updating
        window.site.events.emit('historyChange', url);

        // Split the url in usable segments
        const current = url.split('/');
        if (current[current.length - 1] === '') current.pop();
        if (current[0] === '') current.shift();

        // Update the state with route data
        const previous = this.state.route.current;
        const route = {current, previous, url};

        // Start outro when the component will leave
        pageOutro(() => {
            this.setState({route});
        }, {
            mainContainer: document.querySelector("main")
        });
    }

    /**
     * React's Render function, should return a single child element
     * @see https://facebook.github.io/react/docs/react-component.html#render
     * @return {XML}
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
     * @param state
     */
    renderMain(state) {
        const {url} = state.route;
        switch (url) {
        case "/":
            return <Home/>;
        case "/project":
            return <Projects/>;
        case "/programming":
            return <Programming/>;
        case "/about":
            return <About/>;
        default:
            return <NotFound/>;
        }
    }
}
