import {h} from 'preact';

/**
 * Export the Cdn icon
 *
 * @return {*}
 * @constructor
 */
const Cdn = ({...props}) => {
    return (
        <svg {...props} fill="#616161" viewBox="0 0 18 18" preserveAspectRatio="xMidYMid meet" focusable="false">
            <path d="M9 0L6.3 2.7v2.04L9 2.04l2.7 2.7V2.7zm0 18l-2.7-2.7v-2.04l2.7 2.7 2.7-2.7v2.04zM0 9l2.7 2.7h2.04L2.04 9l2.7-2.7H2.7zm18 0l-2.7 2.7h-2.04l2.7-2.7-2.7-2.7h2.04zM6.3 11.7V6.3h5.4v5.4z"/>
        </svg>
    );
};

export default Cdn;
