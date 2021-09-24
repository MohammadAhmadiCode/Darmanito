import React, { Fragment } from 'react';

import BlueCover from '../UI/BlueCover';
import FaqIconList from '../FAQ/FAQIconList/FAQIconList';
import FaqQuestionList from '../FAQ/FAQQuestionList/FAQQuestionList';

import Footer from '../Footer/Footer';
import Support from '../Footer/Support/Support';



const FAQ = () => {
    return (
        <Fragment>
            <BlueCover text="سوالات متداول"/>
            <div className="FAQ">
                <h3 className="FAQ-Title">سوال شما درباره کدام سرویس است؟</h3>
                <FaqIconList/>
                <FaqQuestionList/>
            </div>
            <Support/>
            <Footer/>
        </Fragment>
    );
}

export default FAQ;