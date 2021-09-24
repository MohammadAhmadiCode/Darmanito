import React from 'react';

import shortid from 'short-id';

import Card from '../../RegisterPharmacy/RegisterMain/RegisterMainCards/RegisterMainCards';
import ProgressBar from '../../UI/ProgressBar'; 

const RegisterPharmacyDetail = (props) => {
    return(
        <div className="SecoundForms ">
            <div className="SecoundForms-Cards">
                <Card
                name= 'نام داروخانه شما'
                address= 'درمانیتو - سرویس داروخانه - داروخانه شما'
                image= {null}
                active= {true}
                borderSize={true}
                directionLeft={false}
                id= {shortid.generate()}/>
                <Card
                name= 'نام داروخانه شما'
                address= 'درمانیتو - سرویس داروخانه - داروخانه شما'
                image= {null}
                active= {false}
                borderSize={false}
                directionLeft={false}
                id= {shortid.generate()}/>
                <Card
                name= 'نام داروخانه شما'
                address= 'درمانیتو - سرویس داروخانه - داروخانه شما'
                image= {null}
                active= {true}
                borderSize={false}
                directionLeft={true}
                id= {shortid.generate()}/>
            </div>

            <form className="SecoundForms-Form">
                <div className="SecoundForms-Form-Titles">
                    <h3 className="SecoundForms-Form-Title">عضویت به عنوان داروخانه</h3>
                    <div className="SecoundForms-Form-ProgressBar">
                        <ProgressBar
                        value={26}/>
                    </div>
                </div>
                <div className="SecoundForms-Form-City">
                    <label className="SecoundForms-Form-City-Label"
                    htmlFor="city">شهر</label>
                    <select onChange={props.formik.handleChange}
                    className="SecoundForms-Form-City-Select" name="city">
                    <option value={props.formik.values.city}>
                        {props.formik.values.city}</option>
                        <option value="تهران">
                            تهران</option>
                        <option value="البرز">
                            البرز</option>
                        <option value="تهران">
                            تهران</option>
                        <option value="البرز">
                            البرز</option>
                    </select>
                </div>
                <div className="SecoundForms-Form-District">
                    <label className="SecoundForms-Form-District-Label"
                    htmlFor="district">منطقه</label>
                    <select onChange={props.formik.handleChange}
                    className="SecoundForms-Form-District-Select"
                    name="district">
                        <option value={props.formik.values.district}>
                        {props.formik.values.district}</option>
                        <option value="1">منطقه یک</option>
                        <option value="2">منطقه دو</option>
                        <option value="3">منطقه سه</option>
                        <option value="4">منطقه چهار</option>
                    </select>
                </div>
                <button className="SecoundForms-Form-Button" onClick={props.nextStep}>تکمیل ثبت نام</button>
            </form>    
    </div>

    );
}

export default RegisterPharmacyDetail;