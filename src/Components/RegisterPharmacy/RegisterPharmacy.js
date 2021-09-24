import React, { Fragment } from 'react';

import RegisterMain from './RegisterMain/RegisterMain';
import RegisterPharmacyCounter from './RegisterPharmacyCounter/RegisterPharmacyCounter';
import RegisterPharmacyServices from './RegisterPharmacyServices/RegisterPharmacyServices';

import Support from '../Footer/Support/Support';
import Footer from '../Footer/Footer';


const RegisterPharmacy = () => {
    return (
        <Fragment>
            <RegisterMain/>
            <RegisterPharmacyCounter/>
            <RegisterPharmacyServices/>
            <Support/>
            <Footer/>
        </Fragment>
    );
}

export default RegisterPharmacy;