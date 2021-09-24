import React, { Fragment } from 'react';

import Cover from '../UI/BlueCover';
import Support from '../Footer/Support/Support';
import Footer from '../Footer/Footer';


const AboutUs = () => {
    return (
        <Fragment>
            <Cover text="درباره ما"/>
            <div className='about-Us'>

            </div>
            <Support/>
            <Footer/>
        </Fragment>
    );
}

export default AboutUs;