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

import Awwwards from './svg/Awwwards';
import Cssda from './svg/Cssda';
import Fwa from './svg/Fwa';
import Webby from './svg/Webby';
import Lovie from './svg/Lovie';
import Dia from './svg/Dia';

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
    cpu: Cpu,
    awwwards: Awwwards,
    cssda: Cssda,
    fwa: Fwa,
    webby: Webby,
    lovie: Lovie,
    dia: Dia
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
