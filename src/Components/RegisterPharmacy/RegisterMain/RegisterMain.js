import React, {useState} from 'react';

import shortid from 'short-id';
import RegisterMainCards from './RegisterMainCards/RegisterMainCards';
import Modal from '../../UI/Modal'

const registerMainCards = [
    {
        name: 'نام داروخانه شما',
        address: 'درمانیتو - سرویس داروخانه - داروخانه شما',
        image: null,
        active: true,
        borderSize : true,
        directionLeft : false ,
        id: shortid.generate()
    },
    {
        name: 'نام داروخانه شما',
        address: 'درمانیتو - سرویس داروخانه - داروخانه شما',
        image: null,
        active: false,
        borderSize : false,
        directionLeft : false ,
        id: shortid.generate()
    },
    {
        name: 'نام داروخانه شما',
        address: 'درمانیتو - سرویس داروخانه - داروخانه شما',
        image: null,
        active: true,
        borderSize : false,
        directionLeft : true ,
        id: shortid.generate()
    },
];

const RegisterMain = () => {

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
        <div className="register-Main">
            <Modal show={purchasing.Purchasing } 
                    modalClose={purchaseCanceleHandler} 
                    buttonClick={purchaseCanceleHandler}
                    title = '  ارسال موفق بود '
                    text = ' لینک ثبت نام برای شما ارسال خواهد شد ' />
            <div className="register-Main-Items">
                <h1 className="register-Main-Items-Title">شما هم در سلامت و بهبود مردم کشورمان موثر باشید.</h1>
                <p className="register-Main-Items-Description">با ثبت نام به عنوان داروخانه یا فروشگاه شما هم به سیستم درمان کمک کنید و به هزاران کاربر خدمات ارائه بدید همچنین روزانه درآمد حساب خودتان را تصویه کنید.</p>
                <div className="register-Main-Items-Inputs">
                    <input className="register-Main-Items-Inputs-Input" 
                           type="text" 
                           placeholder="شماره همراه را وارد کنید "
                           onChange={handleChange}
                           value={number.number}
                           />
                    <button className="register-Main-Items-Inputs-Button"
                            onClick={ number.errors ? null : SubmitHandler }>ثبت نام سریع</button>
                </div>
                <div className={ number.errors ? "errors" : null }>{number.errorsValue}</div>
            </div>
            <div>
                {registerMainCards.map((registerMainCards) => 
                                        <RegisterMainCards
                                            name={registerMainCards.name}
                                            address={registerMainCards.address}
                                            image={registerMainCards.image}
                                            active={registerMainCards.active}
                                            borderSize={registerMainCards.borderSize}
                                            directionLeft={registerMainCards.directionLeft}
                                            key={registerMainCards.id}/>)}
            </div>
        </div>
        );
}
export default RegisterMain;