import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 

import 'tachyons';

import Logo from '../UI/Logo';
import navigationItems from './NavbarNavigationListItems/NavbarNavigationListItems';

const Navbar = () => {
    const [sideDrawer, setSideDrawer] = useState({ Open: false });
    const drawgerToggle = () =>
    setSideDrawer((sideDrawer) => ({ Open: !sideDrawer.Open }));

    const [navbar,setNavbar] = useState(false);

    const onScroll = () => {
        if(window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll',onScroll);

    const scrollTopHandler = () => {
        return window.scrollTo(0, 0)
    }


    return (
        <header className={navbar ? 'navbar onScroll' : 'navbar'}>
            <Logo/>
            <div className={
                 sideDrawer.Open
                    ? "navbar-Content navbar-Content-Active"   
                    : "navbar-Content"}>
                    
                <ul className="navbar-Navigation">
                    {navigationItems.map((navigationItems, index) => {
                        return (
                            <li className="navbar-Navigation-Items" key={index}>
                                <NavLink  
                                    to={navigationItems.href}
                                    exact
                                    activeClassName= "navbar-Navigation-Items active"
                                    key={index}
                                    onClick={scrollTopHandler}> 
                                        {navigationItems.title}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>

                <div className="navbar-Button-Separator"></div>
                <button className="navbar-Button b">دانلود درمانیتو</button>

            </div>
            <i
                className={
                !sideDrawer.Open
                    ? "navbar-BurgerBars fa fa-bars"
                    : "navbar-BurgerBarsDisable fa fa-bars"
                }
                onClick={drawgerToggle}
            ></i>
            <i
                className={
                    sideDrawer.Open
                    ? "navbar-BurgerCross fa fa-times"
                    : "navbar-BurgerCrossDisable fa fa-times"
                }
                onClick={drawgerToggle}
            ></i>
        </header>
    );
}

export default Navbar;