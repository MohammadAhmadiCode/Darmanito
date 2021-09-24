import React, { useState } from 'react';

import appDownload from '../../../Assets/Images/Main/appDownload.svg';

import SibAppLogoButton from '../../UI/SibAppLogoButton';
import BazarLogoButton from '../../UI/BazzarLogoButton';
import AndroidLogoButton from '../../UI/AndroidLogoButton';
import Modal from '../../UI/Modal'

const AppDownload = () => {

    const Style = {
        backgroundColor: "#2361b5"
    };

    const [number,setNumber] = useState({
        number : '',
        errors : false,
        errorsValue : ''
    })

    const handleChange=(event)=>{
        event.preventDefault();
        if ((isNaN(event.target.value))) {
            setNumber({errors:true , errorsValue : 'لطفا عدد وارد کنید'})
        }
        else {
            if ((event.target.value[0] !==  '0') || (event.target.value[1] !==  '9') ) {
                setNumber({errors:true , errorsValue : 'شماره باید با ( *** 09 ) شروع شود'})
            } 
            else if((event.target.value.length > 11)){
                setNumber({errors:true , errorsValue : 'شماره باید حداکثر 11 رقم باشد'})
            }
            else if((event.target.value.length < 11)){
                setNumber({errors:true , errorsValue : 'شماره باید حداقل 11 رقم باشد'})
            }
            else {
                setNumber({errors:false})
            } 
        }
    }

    const SubmitHandler = (event) => {
        event.preventDefault()
        if(number.number === ''){
            setNumber({errors:true , errorsValue : 'فیلد شماره را پر کنید'})
        } 
        else {
            setNumber({errors:false})
            return setPurchasing({...purchasing , Purchasing : true})
        }
    }

    const [purchasing,setPurchasing] = useState ({ Purchasing : false })

    const purchaseCanceleHandler = () => {
        return setPurchasing({...purchasing , Purchasing : false})
    }

    return(
        <div className="appDownload-Container">
            <Modal show={purchasing.Purchasing } 
                   modalClose={purchaseCanceleHandler} 
                   buttonClick={purchaseCanceleHandler}
                   title = '  ارسال موفق بود '
                   text = ' لینک دانلود برای شما ارسال خواهد شد ' />
            <div className="appDownload">
                <div className="appDownload-Info">
                    <h2 className="appDownload-Info-Title">دانلود اپلیکیشن درمانیتو</h2>
                    <p className="appDownload-Info-Description">برای دریافت لینک دانلود، شماره موبایل خود را وارد کنید.</p>
                    <div className={ number.errors ? "appDownload-Info-Input Input-Active" : "appDownload-Info-Input" }>
                        <button className="appDownload-Info-Input-Button"
                                onClick={ number.errors ? null : SubmitHandler }>بفرست</button>
                        <input className="appDownload-Info-Input-Input"
                               type="text" 
                               placeholder="شماره همراه را وارد کنید 09912515020"
                               onChange={handleChange}
                               value={number.number} />
                    </div>
                    <div className={ number.errors ? "error" : null }>{number.errorsValue}</div>
                    <div className="appDownload-Icons">
                        <AndroidLogoButton
                            backgroundColor={Style.backgroundColor}/>
                        <BazarLogoButton
                            href='https://cafebazaar.ir/install'
                            backgroundColor={Style.backgroundColor}/>
                        <SibAppLogoButton
                            href='https://sibapp.com'
                            backgroundColor={Style.backgroundColor}/>
                    </div>
                </div>
                <img className="appDownload-Image" src={appDownload} alt="Mobile Application"/>
            </div>
        </div>
    );
}

export default AppDownload;