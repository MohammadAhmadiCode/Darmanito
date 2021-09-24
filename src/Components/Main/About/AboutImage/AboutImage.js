import React from 'react';

import aboutImage from '../../../../Assets/Images/Main/aboutImage.svg';

const AboutImage = () => {
    return (
        <div className='about-Image'>
            <img className='about-Image-Image' src={aboutImage} alt='Darmanito-About' href='/'></img>
        </div>
    );
}

export default AboutImage;