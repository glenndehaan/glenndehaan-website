import {h, Component} from 'preact';
import { connect } from 'unistore/preact';

import config from '../config';
import Link from '../components/Link';
import {pageIntro} from '../utils/pageTransitions';

class Home extends Component {
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
        document.title = `Home | ${config.general.siteName}`;

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
                <header className="landing-header">
                    <h1 className="landing-title title-regular title-white">
                        Glenn <br/>de Haan
                    </h1>
                    <h2 className="landing-title-sub title-small title-white">
                        DevOps Engineer <br/>Media Workflow Engineer <br/>Backend Developer
                    </h2>
                </header>
                <section className="landing-skills">
                    <ul className="skills-list">
                        <li className="skill">
                            <h4 className="title-small">PHP</h4>
                        </li>
                        <li className="skill">
                            <h4 className="title-small">Windows Server</h4>
                        </li>
                        <li className="skill">
                            <h4 className="title-small">Javascript</h4>
                        </li>
                        <li className="skill">
                            <h4 className="title-small">Interactive Installations</h4>
                        </li>
                        <li className="skill">
                            <h4 className="title-small">Java</h4>
                        </li>
                    </ul>
                    <ul className="skills-list">
                        <li className="skill">
                            <h4 className="title-small">Streaming</h4>
                        </li>
                        <li className="skill">
                            <h4 className="title-small">Node.js</h4>
                        </li>
                        <li className="skill">
                            <h4 className="title-small">Linux / Ubuntu / Debian</h4>
                        </li>
                        <li className="skill">
                            <h4 className="title-small">Networking</h4>
                        </li>
                    </ul>
                    <Link href="/about" className="cta fade-red shadow">More about me</Link>
                </section>
                <section className="landing-cards">
                    <h2 className="title-regular title-white align-center">Still learning...</h2>
                    {this.renderProgrammingBlocks()}
                </section>
                <footer className="footer">
                    <a href="tel:+31646453232" className="footer-anchor title-regular">+316 46 45 32 32</a>
                    <a href="mailto:glenn@dehaan.cloud" className="footer-anchor title-regular">glenn@dehaan.cloud</a>
                </footer>
            </main>
        );
    }

    /**
     * Render's the programming blocks
     *
     * @return {null|*}
     */
    renderProgrammingBlocks() {
        if(this.props.programming.length > 0) {
            return (
                <div className="grid grid-landing grid-white">
                    <a className="grid-item shadow" href={this.props.programming[0].html_url} target="_blank" rel="noopener noreferrer">
                        <header className="item-header">
                            <h2 className="item-title title-regular">{this.props.programming[0].name}</h2>
                        </header>
                        <p className="item-copy copy-grey">{this.props.programming[0].description !== null ? this.props.programming[0].description : 'Still trying to find a description'}</p>
                        <div className="item-anchor copy-grey">View on GitHub</div>
                    </a>
                    <a className="grid-item shadow" href={this.props.programming[1].html_url} target="_blank" rel="noopener noreferrer">
                        <header className="item-header">
                            <h2 className="item-title title-regular">{this.props.programming[1].name}</h2>
                        </header>
                        <p className="item-copy copy-grey">{this.props.programming[1].description !== null ? this.props.programming[1].description : 'Still trying to find a description'}</p>
                        <div className="item-anchor copy-grey">View on GitHub</div>
                    </a>
                    <a className="grid-item shadow" href={this.props.programming[2].html_url} target="_blank" rel="noopener noreferrer">
                        <header className="item-header">
                            <h2 className="item-title title-regular">{this.props.programming[2].name}</h2>
                        </header>
                        <p className="item-copy copy-grey">{this.props.programming[2].description !== null ? this.props.programming[2].description : 'Still trying to find a description'}</p>
                        <div className="item-anchor copy-grey">View on GitHub</div>
                    </a>
                    <a className="grid-item shadow" href={this.props.programming[3].html_url} target="_blank" rel="noopener noreferrer">
                        <header className="item-header">
                            <h2 className="item-title title-regular">{this.props.programming[3].name}</h2>
                        </header>
                        <p className="item-copy copy-grey">{this.props.programming[3].description !== null ? this.props.programming[3].description : 'Still trying to find a description'}</p>
                        <div className="item-anchor copy-grey">View on GitHub</div>
                    </a>
                </div>
            );
        } else {
            return null;
        }
    }
}

/**
 * Connect the store to the component
 */
export default connect('programming')(Home);
