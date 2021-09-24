import React from 'react';

const FAQIcon = (props) => {
    return(
        <div onClick={props.click} className={props.active ? "FAQIcon FAQIcon-Active" : "FAQIcon" }>
            <img className="FAQIcon-Image" src={props.image} alt="FAQ Icon"/>
            <p className="FAQIcon-Text">{props.text}</p>
        </div>);
}
export default FAQIcon;