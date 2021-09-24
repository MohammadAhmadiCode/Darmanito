import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

import success from '../../Assets/Images/UI/success.svg';
import BackDrop from './BackDrop';

const Modal = (props) => {
    return (
        <Fragment>
            <BackDrop show={props.show} clicked={props.modalClose} />
            <div className={props.show 
                ? 'Modal Active' 
                : 'Modal Not-Active'
                }>
                <div className='Modal-Image'>
                    <img src={success} alt='Succes Icon'></img>
                </div>
                <div className='Modal-Items'>
                    <p className='Modal-Items-Title'> {props.title} </p>
                    <p className='Modal-Items-Text'> {props.text} </p>
                    <button className='Modal-Items-Button' onClick={props.buttonClick} >
                        <Link className='Modal-Items-Button-Text' to='/'>بازگشت</Link>
                    </button>
                </div>
            </div>
        </Fragment>
    );
}

export default Modal;