import React from 'react';

const TermAndConditionsIcon = (props) => {
    return (
        <div onClick={props.click} 
             className={props.active
                        ? "TermAndConditionsIcon TermAndConditionsIcon-Active"
                        : "TermAndConditionsIcon"}>
            <p className={props.active 
                        ? "TermAndConditionsIcon-Text TermAndConditionsIcon-Active" 
                        : "TermAndConditionsIcon-Text" }>{props.title}</p>
        </div>
    );
}

export default TermAndConditionsIcon;