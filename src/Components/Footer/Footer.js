import React from 'react';
import { Link } from 'react-router-dom'

import {footerPages, footerServices} from './FooterNavigationItems/FooterNavigationItems';

import Logo from '../UI/Logo';
import BazarLogoButton from '../UI/BazzarLogoButton';
import SibAppLogoButton from '../UI/SibAppLogoButton';

const Footer = () => {

    const Style = {
        backgroundColor: "#000000"
    };

    const scrollTopHandler = () => {
        return window.scrollTo(0, 0)
    }
    return(
        <div className="footer">
        
            <div className="footer-Main">
                <Logo />
                <h3 className="footer-Main-Title">سوپر اپلیکیشن درمان و سلامت</h3>
                <p className="footer-Main-Text">تمام حقوق مادی و معنوی این سایت متعلق به درماینیتو است.</p>
                <div className="footer-Main-SocialNetwork">
                    <i className="footer-Main-SocialNetwork-Linkedin fab fa-linkedin-in"></i>
                    <i className="footer-Main-SocialNetwork-Twitter fab fa-twitter"></i>
                    <i className="footer-Main-SocialNetwork-Instagram active fab fa-instagram"></i>
                </div>
            </div>

            <div className="footer-Pages">
                <p className="footer-Pages-Title">خدمات درمانیتو </p>
                <ul className="footer-Pages-Item">
                {footerServices.map((footerServices,index) => 
                        <li className='footer-Pages-Item-Items' key={index}>
                                <Link  className={footerServices.active === true 
                                                ? "footer-Pages-Item-Items-li Active"
                                                : "footer-Pages-Item-Items-li"} 
                                       to={footerServices.href}
                                       onClick={scrollTopHandler}> 
                                        {footerServices.title} 
                                </Link>
                        </li>)}
                </ul>
            </div>

            <div className="footer-Services">
                <p className="footer-Services-Title"> صفحات درمانیتو</p>
                <ul className="footer-Services-Item">
                    {footerPages.map((footerPages,index) => 
                        <li className='footer-Services-Item-Items' key={index}>
                                <Link className="footer-Services-Item-Items-li" 
                                      to={footerPages.href}
                                      onClick={scrollTopHandler}>
                                    {footerPages.title}
                                </Link>
                        </li>)}
                </ul>
            </div>

            <div className="footer-Download">
                <p className="footer-Download-Title">دانلود درمانیتو</p>
                <div className="footer-Download-Icons">
                    <BazarLogoButton backgroundColor={Style.backgroundColor} href="https://cafebazaar.ir/install"/>
                    <SibAppLogoButton backgroundColor={Style.backgroundColor} href="https://sibapp.com"/>
                </div>
            </div>
        </div>
    );
}

export default Footer;