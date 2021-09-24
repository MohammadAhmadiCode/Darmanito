import React from 'react';

import sibAppLogo from '../../Assets/Images/UI/sibAppLogo.svg';
import sibAppText from '../../Assets/Images/UI/sibAppText.svg';

const SibAppLogoButton = (props) => {
    return(
        <a className="sibAppButton-Container" href={props.href}  target="_blank">
            <button className="sibAppButton" style={{backgroundColor: props.backgroundColor}}>
                    <img src={sibAppLogo} alt="sibAppLogo"/>
                <div className="sibAppButton-a">
                    <p className="sibAppButton-Text">دریافت نسخه ios از</p>
                    <img src={sibAppText} alt="sibAppLogoText"/>
                </div>
            </button>
        </a>
    );
}

export default SibAppLogoButton;
