import {h, Component} from 'preact';
import config from '../main/config';
import {pageIntro, pageOutro} from './animations/pageTransitions';

/**
 * Presentational part of the component
 * @constructor
 */
export default class NotFound extends Component {
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
     * On leave
     * @param callback
     */
    componentWillLeave(callback) {
        //Start outro when the component will appear
        pageOutro(callback, this.domElements);
    }

    /**
     * Invoked once after the initial rendering occurs
     * @see https://facebook.github.io/react/docs/react-component.html#componentdidmount
     * @return {void}
     */
    componentDidMount(){
        document.title = `Not Found | ${config.siteName}`;
        window.site.events.emit('historyChange', '');

        //Start intro when the component will appear
        pageIntro(() => {}, this.domElements);
    }

    /**
     * React's Render function, should return a single child element
     * @see https://facebook.github.io/react/docs/react-component.html#render
     * @return {XML}
     */
    render() {
        return (
            <main className="page not-found" ref={(c) => this.domElements.mainContainer = c}>
                <h1 className="landing-title not-found-title">404 Page <br/>not found!</h1>
            </main>
        )
    }
}
