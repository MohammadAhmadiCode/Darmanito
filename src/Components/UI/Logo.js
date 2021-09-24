import React from 'react';

import 'tachyons';

import logo from '../../Assets/Images/UI/logo.svg';

const Logo = () => {
    return (
            <div className='logo'>
                <img src={logo} alt='Darmanito-Logo' href='/'></img>
                <div className='logo-Items'>
                    <p className='f4 b'> درمانیتو </p>
                    <p className='f6'> همراه شما در درمان </p>
                </div>
            </div>
    );
}

export default Logo;