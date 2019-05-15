import {h} from 'preact';

import Score from './Score'

function Lighthouse({
    scores
}) {
    return (
        <section className="lighthouse">
            <h4 className="lighthouse-heading">Lighthouse scores</h4>
            <div className="lighthouse-scores">
                {scores && scores.length > 0 && scores.map((score, i) => (
                    <Score {...score} key={i.toString()} />
                ))}
            </div>
        </section>
    )
}

export default Lighthouse;
