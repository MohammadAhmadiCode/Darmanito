import React from 'react';

import registerPharmacy from '../../../../Assets/Images/RegisterPharmacy/registerPharmacy.svg';
import locationMark from '../../../../Assets/Images/RegisterPharmacy/locationMark.svg';

const RegisterMainCards = (props) => {
    return(
        <div className={
                        (() => {
                        if (props.borderSize === true) {
                          return (
                            "registerMainCards"
                          )
                        } else if (props.directionLeft === true) {
                          return (
                            "registerMainCards-NotActive directionLeft"
                          )
                        } else {
                          return (
                            "registerMainCards-NotActive"
                          )
                        }
                        })()  }>
            <img className={props.borderSize === true 
                                                     ? "registerMainCards-Image" 
                                                     : "registerMainCards-NotActive-Image" } 
                                                     src={registerPharmacy} 
                                                     alt='Human' 
                                                     ></img>
            <div>
                <h2 className={props.borderSize === true 
                                                     ? "registerMainCards-Name" 
                                                     : "registerMainCards-NotActive-Name"}>{props.name}</h2>
                <div className={props.borderSize === true 
                                                     ? "registerMainCards-Address" 
                                                     : "registerMainCards-NotActive-Address"}>
                <img className={props.borderSize === true 
                                                     ? "registerMainCards-Address-Icon" 
                                                     : "registerMainCards-NotActive-Address-Icon"} src={locationMark} 
                                                                                                     alt='Location Mark'></img>
                <p className={props.borderSize === true 
                                                     ? "registerMainCards-Address-Text" 
                                                     : "registerMainCards-NotActive-Address-Text"}>{props.address}</p>
                </div>
            </div>
            {props.active
             ? <p className={props.borderSize === true 
                                                     ? "registerMainCards-Boarding" 
                                                     : "registerMainCards-NotActive-Boarding"}>شبانه روزی</p>
             : null}
        </div>
    );
}

export default RegisterMainCards;