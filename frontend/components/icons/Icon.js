import {h} from 'preact';

import Cdn from './Cdn';
import Disk from './Disk';
import Github from './Github';
import Lighthouse from './Lighthouse';
import Linkedin from './Linkedin';
import Loadbalancer from './Loadbalancer';
import Memory from './Memory';
import Processor from './Processor';

const types = {
    cdn: Cdn,
    disk: Disk,
    github: Github,
    lighthouse: Lighthouse,
    linkedin: Linkedin,
    loadbalancer: Loadbalancer,
    memory: Memory,
    processor: Processor,
    cpu: Linkedin
}

function Icon({ type, innerRef = () => {}, className }) {
    console.log('type', type)
    const IconComp = types[type];
    return <IconComp className={className} innerRef={innerRef} />;
}

export default Icon
