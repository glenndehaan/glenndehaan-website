import {h, Component} from 'preact';
import {Link} from 'preact-router/match';
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

        this.state = {
            projects: config.projects
        };

        window.site.events.on('apiDataUpdate', () => {
            this.setState({
                projects: config.projects
            });
        });
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
        document.title = `Projects | ${config.siteName}`;
        window.site.events.emit('historyChange', '/projects');

        //do something when the component will appear
        pageIntro(() => {}, this.domElements);
    }

    /**
     * React's Render function, should return a single child element
     * @see https://facebook.github.io/react/docs/react-component.html#render
     * @return {XML}
     */
    render() {
        return (
            <main ref={c => this.domElements.mainContainer = c}>
                <div className="grid grid-color">
                    {this.state.projects.map((item, key) => (
                        <Link className="grid-item" href={item.path} key={key}>
                            <header className="item-header">
                                <h2 className="item-title title-regular">{item.title}</h2>
                            </header>
                            <p className="item-copy copy-white">{item.intro}</p>
                            <div className="item-anchor copy-white">Read more</div>
                        </Link>
                    ))}
                </div>
            </main>
        );
    }
}
