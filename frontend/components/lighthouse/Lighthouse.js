import {h} from 'preact';

import Score from './Score'
import IconLightHouse from '../icons/Lighthouse';

/**
 * Export the Lighthouse component
 *
 * @param scores
 * @return {*}
 */
function Lighthouse({ scores }) {
    return (
        <section className="lighthouse">
            <h4 className="lighthouse-heading title-medium align-center">
                <IconLightHouse className="lighthouse-icon" />
                Google Lighthouse audits
            </h4>
            <div className="lighthouse-scores">
                {scores && scores.length > 0 && scores.map((score, i) => (
                    <Score {...score} key={i.toString()} />
                ))}
            </div>
        </section>
    )
}

export default Lighthouse;
