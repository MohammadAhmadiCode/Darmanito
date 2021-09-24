import React from 'react';

import AboutImage from './AboutImage/AboutImage';
import AboutItems from './AboutItems/AboutItems';

const About = () => {
    return (
        <div className='about'>
            <AboutImage/>
            <AboutItems/>
        </div>
    );
}

export default About;