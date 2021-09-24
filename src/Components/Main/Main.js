import React, { Fragment } from 'react';

import "tachyons" ;

import Application from './Application/Application';
import About from './About/About';
import Possibilities from './Possibilities/Possibilities';
import AppDownload from './AppDownload/AppDownload';
import Register from './Register/Register';
import Support from '../Footer/Support/Support';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <Fragment>
            <Application/>
            <About/>
            <Possibilities/>
            <AppDownload/>
            <Register/>
            <Support/>
            <Footer/>
        </Fragment>
    );
}

export default Main;