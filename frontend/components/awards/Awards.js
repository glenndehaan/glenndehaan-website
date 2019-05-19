import { h } from 'preact';
import cc from 'classcat';

import Icon from '../icons';

/**
 * Render the awards component
 *
 * @param items
 * @return {*}
 */
const Awards = ({ items }) => {
    return (
        <section className="awards box small-width content-unit">
            <h4 className="awards-heading title-medium align-center">
                Awards
            </h4>
            <div className="awards-list">
                {items.map((item) => (
                    <p className={cc(['award', `icon-${item}`])} key={item}>
                        <Icon className="award-icon" type={item} />
                    </p>
                ))}
            </div>
        </section>
    )
};

export default Awards;
