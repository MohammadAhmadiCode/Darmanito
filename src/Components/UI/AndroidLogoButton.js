import React from 'react';

import androidLogo from '../../Assets/Images/UI/androidLogo.svg';

const AndroidLogoButton = (props) => {
    return(
        <a className="androidButton-Container" href={props.href} target="_blank">
            <button className="androidButton" style={{backgroundColor: props.backgroundColor}}>
                <img src={androidLogo} alt="Android logo" />
                <p className="androidButton-Text">دانلود مستقیم</p>
            </button>
        </a>
    );
}

export default AndroidLogoButton;