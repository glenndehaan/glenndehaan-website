import {h} from 'preact';

/**
 * Export the Memory icon
 *
 * @return {*}
 * @constructor
 */
function Memory({...props}) {
    return (
        <svg {...props} fill="none" fillRule="evenodd" viewBox="0 0 32 32">
            <path d="M1 3h5v4H1zm0 7h5v4H1zm0 7h5v4H1zm0 7h5v4H1zM26 3h5v4h-5zm0 7h5v4h-5zm0 7h5v4h-5zm0 7h5v4h-5z" fill="#616161"/>
            <path d="M30 7h-4V3zm0 7h-4v-4zm0 7h-4v-4zm0 7h-4v-4z" fill="#424242"/>
            <path d="M6 31h20V0H6v31zm9-14h-5l7-12v9h5l-7 12v-9z" fill="#757575"/>
            <path d="M15 31v-5l7-12h-5V0h9v31z" fill="#616161"/>
        </svg>
    );
}

export default Memory;
