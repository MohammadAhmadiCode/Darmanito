import React, { Fragment } from 'react';

import BlueCover from '../UI/BlueCover';
import TermAndConditionsList from './TermAndConditionsList/TermAndConditionsList';

import Support from '../Footer/Support/Support';
import Footer from '../Footer/Footer';


const TermAndConditions = () => {
    return (
        <Fragment>
            <BlueCover text="قوانین و شرایط"/>
            <TermAndConditionsList/>
            <Support/>
            <Footer/>
        </Fragment>
    );
}

export default TermAndConditions;