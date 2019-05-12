import {h, Component} from 'preact';
import { connect } from 'unistore/preact';

import config from '../config';
import {pageIntro} from '../utils/pageTransitions';

class Programming extends Component {
    /**
     * Constructor
     */
    constructor() {
        super();

        this.domElements = {
            mainContainer: null
        };
    }

    /**
     * Runs then component mounts
     */
    componentDidMount(){
        document.title = `Programming | ${config.siteName}`;

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
            <main ref={c => this.domElements.mainContainer = c}>
                <h3 className="visually-hidden">Programming</h3>
                <div className="grid grid-white">
                    {this.props.programming.map((item, key) => (
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

/**
 * Connect the store to the component
 */
export default connect('programming')(Programming);
