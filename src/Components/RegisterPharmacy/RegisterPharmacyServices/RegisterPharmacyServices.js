import React from 'react';
import {useHistory} from 'react-router-dom';

import registerMarket from '../../../Assets/Images/RegisterPharmacy/registerMarket.svg';
import drugStore from '../../../Assets/Images/RegisterPharmacy/registerDrugStore.svg';

const RegisterPharmacyServices = () => {

    const history = useHistory();
    const clickHandler = () => history.push('/RegisterPharmacy/Register');

    return(
        <div className="pharmacyServices">
            <h2 className="pharmacyServices-Title">در درمانیتو چه خدمات ارائه خواهید داد؟</h2>
            <p className="pharmacyServices-Description">خدمت مورد نظر خود را برای ثبت نام انتخاب کنید.</p>
            <div className="pharmacyServices-Items">
                <div className="pharmacyServices-Items-Card">
                    <img className="pharmacyServices-Items-Card-Image" src={registerMarket} alt="market"/>
                    <h3 className="pharmacyServices-Items-Card-Title">فروشگاه آرایشی و بهداشتی</h3>
                    <p className="pharmacyServices-Items-Card-Description">مایل هستم فقط به عنوان داروخانه فعالیت کنم و در بخش صرفا سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم.</p>
                    <button className="pharmacyServices-Items-Card-Button" onClick={clickHandler} >ثبت نام</button>
                </div>

                <div className="pharmacyServices-Items-Card">
                    <img className="pharmacyServices-Items-Card-Image" src={drugStore} alt="pharmacy"/>
                    <h3 className="pharmacyServices-Items-Card-Title">داروخانه</h3>
                    <p className="pharmacyServices-Items-Card-Description">مایل هستم فقط به عنوان داروخانه فعالیت کنم و در بخش صرفا سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم.</p>
                    <button className="pharmacyServices-Items-Card-Button" onClick={clickHandler} >ثبت نام</button>
                </div>
            </div>
        </div>
    );
}
export default RegisterPharmacyServices;