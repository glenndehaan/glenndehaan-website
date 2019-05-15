import {h} from 'preact';

/**
 * Export the LinkedIn icon
 *
 * @return {*}
 * @constructor
 */
const Linkedin = () => {
    return (
        <svg className="icon icon-linkedin" viewBox="0 0 42 42">
            <path d="M5.05,0A5.06,5.06,0,1,0,10.1,5.06,5.05,5.05,0,0,0,5.05,0Z" />
            <rect x="0.68" y="13.95" width="8.71" height="28.05" />
            <path d="M31.56,13.26a9.14,9.14,0,0,0-8.24,4.52H23.2V13.95H14.88V42h8.69V28.12c0-3.65.68-7.2,5.21-7.2s4.52,4.18,4.52,7.44V42H42V26.63C42,19.07,40.36,13.26,31.56,13.26Z" />
        </svg>
    );
};

export default Linkedin;
