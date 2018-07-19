import {h, Component} from 'preact';
import config from '../main/config';
import {mainIntro, pageIntro, pageOutro} from '../general/animations/pageTransitions';

/**
 * Presentational part of the component
 * @constructor
 */
export default class Programming extends Component {
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
            programming: config.programming
        };

        window.site.events.on('apiDataUpdate', () => {
            this.setState({
                programming: config.programming
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
        document.title = `Programming | ${config.siteName}`;
        window.site.events.emit('historyChange', '/programming');

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
                <h3 className="visually-hidden">Programming</h3>
                <div className="grid grid-white">
                    {this.state.programming.map((item, key) => (
                        <a className="grid-item" href={item.html_url} target="_blank" rel="noopener noreferrer" key={key}>
                            <header className="item-header">
                                <h2 className="item-title title-regular">{item.name}</h2>
                            </header>
                            <p className="item-copy copy-grey">{item.description !== null ? item.description : 'Still trying to find a description'}</p>
                            <div className="item-anchor copy-grey">View on GitHub</div>
                        </a>
                    ))}
                </div>
            </main>
        );
    }
}
