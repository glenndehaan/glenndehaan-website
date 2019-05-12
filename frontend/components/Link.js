import {h, Component} from 'preact';

export default class Link extends Component {
    /**
     * Navigates to a URL
     *
     * @param element
     * @param href
     */
    navigate(element, href) {
        element.preventDefault();
        history.pushState({}, null, href);
    }

    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        const {href, children, className} = this.props;

        return (
            <a className={className} onClick={(element) => this.navigate(element, href)} href={href}>{children}</a>
        )
    }
}
