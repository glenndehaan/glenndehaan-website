import {h, Component} from 'preact';

/**
 * Presentational part of the component
 * @constructor
 */
export default class Link extends Component {
    /**
     * Navigates to a URL
     * @param element
     * @param href
     */
    navigate(element, href) {
        element.preventDefault();
        history.pushState({}, null, href);
    }

    /**
     * React's Render function, should return a single child element
     * @see https://facebook.github.io/react/docs/react-component.html#render
     * @return {XML}
     */
    render() {
        const {href, children, className} = this.props;

        return (
            <a className={className} onClick={(element) => this.navigate(element, href)} href={href}>{children}</a>
        )
    }
}
