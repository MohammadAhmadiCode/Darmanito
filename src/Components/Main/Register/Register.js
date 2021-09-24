import React from 'react';

import register from '../../../Assets/Images/Main/register.svg';

const Register = () => {
    return(
        <div className="register-Container">
            <div className="register">
                <img className="register-Image" src={register} alt="person" />
                <div className="register-Info">
                    <h2 className="register-Info-Title">عضویت داروخانه یا مراکز درمانی</h2>
                    <p className="register-Info-Description">اگر به عنوان داروخانه یا مراکز درمانی قصد دارید در روند درمان و کسب و کار خودتان تغییر ایجاد کنید درمانیتو منتظر شماست.</p>
                    <div className="register-Info-Input">
                        <input className="register-Info-Input-Input" 
                               type="text"  
                               placeholder="شماره همراه را وارد کنید 09912515020"/>
                        <button className="register-Info-Input-Button">ثبت نام سریع</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Register;