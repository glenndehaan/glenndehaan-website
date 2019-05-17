import {h} from 'preact';

/**
 * Import icon's
 */
import Cpu from './svg/Cpu';
import Memory from './svg/Memory';
import Disk from './svg/Disk';
import Loadbalancer from './svg/Loadbalancer';
import Cdn from './svg/Cdn';

import Lighthouse from './svg/Lighthouse';
import Github from './svg/Github';
import Linkedin from './svg/Linkedin';

/**
 * Create icon type's
 */
const types = {
    cdn: Cdn,
    disk: Disk,
    github: Github,
    lighthouse: Lighthouse,
    linkedin: Linkedin,
    loadbalancer: Loadbalancer,
    memory: Memory,
    cpu: Cpu
};

/**
 * Render icon type
 *
 * @param type
 * @param innerRef
 * @param className
 * @return {*}
 */
const Icon = ({ type, innerRef = () => {}, className }) => {
    const IconComp = types[type];
    return <IconComp className={className} innerRef={innerRef} />;
};

export default Icon;
