import {h, Component} from 'preact';

import config from '../config';
import Link from '../components/Link';
import {pageIntro} from '../utils/pageTransitions';

export default class Projects extends Component {
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
        document.title = `Projects | ${config.siteName}`;

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
                <div className="grid grid-color">
                    {config.projects.map((item, key) => (
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
