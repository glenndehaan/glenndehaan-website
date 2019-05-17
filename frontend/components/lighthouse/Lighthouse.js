import {h} from 'preact';

import Score from './Score'
import Icon from '../../components/icons';

/**
 * Export the Lighthouse component
 *
 * @param scores
 * @return {*}
 */
function Lighthouse({ scores }) {
    return (
        <section className="lighthouse box small-width content-unit">
            <h4 className="lighthouse-heading title-medium align-center">
                <Icon className="lighthouse-icon" type="lighthouse" />
                Google Lighthouse audits
            </h4>
            <div className="lighthouse-scores">
                {scores && scores.length > 0 && scores.map((score, key) => (
                    <Score {...score} key={key} />
                ))}
            </div>
        </section>
    )
}

export default Lighthouse;
