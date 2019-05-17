import {h} from 'preact';

/**
 * Export the Loadbalancer icon
 *
 * @return {*}
 * @constructor
 */
function Loadbalancer({...props}) {
    return (
        <svg {...props} fill="#616161" viewBox="0 0 18 18">
            <path d="M6 12v-2h6v2h-2v4h6v-4h-2V8h-4V6H8v2H4v4H2v4h6v-4H6zM6 2h6v4H6V2z" fillRule="evenodd"/>
        </svg>
    );
}

export default Loadbalancer;
