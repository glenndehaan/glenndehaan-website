import {h, Component} from 'preact';

import config from '../config';
import {pageIntro} from '../utils/pageTransitions';

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
     * Runs then component mounts
     */
    componentDidMount(){
        document.title = `Not Found | ${config.general.siteName}`;

        //Start intro when the component will appear
        pageIntro(() => {}, this.domElements);
    }

    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        return (
            <main className="page not-found" ref={(c) => this.domElements.mainContainer = c}>
                <h1 className="landing-title not-found-title">404 Page <br/>not found!</h1>
            </main>
        )
    }
}
