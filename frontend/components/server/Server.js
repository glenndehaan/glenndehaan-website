import { h } from 'preact';

import Icon from '../icons';

/**
 * Render the server component
 *
 * @param specs
 * @return {*}
 */
const Server = ({ specs }) => {
    return (
        <section className="server box small-width content-unit">
            <h4 className="server-heading title-medium align-center">
                Server Specifications
            </h4>
            <div className="server-specs">
                {Object.entries(specs).map((spec, key) => (
                    <p className="server-spec" key={key}>
                        <Icon className="server-icon" type={spec[0]} />
                        <span className="server-label copy-grey copy-small v-caps">{spec[1]}</span>
                    </p>
                ))}
            </div>
        </section>
    )
};

export default Server;
