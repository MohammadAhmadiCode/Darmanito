import React from 'react';
import { Link } from 'react-router-dom'

import pageNotFound from '../../Assets/Images/UI/pageNotFound.svg';

const ErrorPage = () => {
    return (
            <div className='errorPage' >
                <img className='errorPage-Image' src={pageNotFound} alt='404 Not Found'></img>
                <div className='errorPage-Texts'>
                    <p className='errorPage-Texts-Title' > 404 Not Found </p>
                    <p className='errorPage-Texts-Text' > Sorry This Page Does Not Exist !     
                        <Link className='errorPage-Texts-Text-Click' to='/'> Click 
                            <span className='errorPage-Texts-Text-Click-Span'> Here </span>
                        </Link> 
                    </p>
                </div>
            </div>
    );
}

export default ErrorPage;