import React from 'react';

const PossibilitiesImages = (props) => {
    return(
        <div onClick={props.click} className={props.active
                        ? "possibilities-Icon possibilities-Icon-Active"
                        : "possibilities-Icon"}>
            <img className="possibilities-Icon-Image" src={props.image} alt="Icon"/>
            <p className="possibilities-Icon-Title">{props.title}</p>
        </div>
    );
}

export default PossibilitiesImages;