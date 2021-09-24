import React from 'react';

import bazarLogo from '../../Assets/Images/UI/bazzarLogo.svg';
import bazarText from '../../Assets/Images/UI/bazzarText.svg';

const BazarLogoButton = (props) => {
    
    return(
        <a className="bazarButton-Container" href={props.href} target="_blank">
            <button className="bazarButton" style={{backgroundColor: props.backgroundColor}}>
                <p className="bazarButton-Text">دریافت از</p>
                <img src={bazarText} alt="Bazar Text" />
                <img src={bazarLogo} alt="Bazar Logo" />
            </button>
        </a>
    );
}

export default BazarLogoButton;