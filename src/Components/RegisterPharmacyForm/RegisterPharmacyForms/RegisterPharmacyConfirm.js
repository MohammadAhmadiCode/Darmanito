import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import shortid from 'short-id';

import Modal from '../../UI/Modal';
import Card from '../../RegisterPharmacy/RegisterMain/RegisterMainCards/RegisterMainCards';

const RegisterPharmacyConfirm = (props) => {

    const [purchasing,setPurchasing] = useState ({ Purchasing : false })

    const SubmitHandler = () => {
       return setPurchasing({...purchasing , Purchasing : true})
    }

    const purchaseCanceleHandler = () => {
        return setPurchasing({...purchasing , Purchasing : false})
    }

    const history = useHistory();
    const handleClick = () => history.push('/');

    return(
        <div className="ThirdForms">
            <Modal show={purchasing.Purchasing } 
                   modalClose={purchaseCanceleHandler} 
                   buttonClick={handleClick}
                   title = 'ثبت نام با موفقیت انجام شد '
                   text = 'برای اعلام توضیحات با شما تماس خواهیم گرفت ' />
            <div className="ThirdForms-Cards">
                <Card
                name= {props.formik.values.placeName}
                address= {props.formik.values.fullAddress}
                image= {props.formik.values.photo}
                active= {true}
                borderSize={true}
                directionLeft={false}
                id= {shortid.generate()}/>
                <Card
                name= {props.formik.values.placeName}
                address= {props.formik.values.fullAddress}
                image= {props.formik.values.photo}
                active= {false}
                borderSize={false}
                directionLeft={false}
                id= {shortid.generate()}/>
                <Card
                name= {props.formik.values.placeName}
                address= {props.formik.values.fullAddress}
                image= {props.formik.values.photo}
                active= {true}
                borderSize={false}
                directionLeft={true}
                id= {shortid.generate()}/>
            </div>
            <div className="ThirdForms-Preview">
                <div className="ThirdForms-Preview-PlaceName">
                    <p className="ThirdForms-Preview-PlaceName-Label">نام داروخانه</p>
                    <p className="ThirdForms-Preview-PlaceName-Value">{props.formik.values.placeName}</p>
                </div>

                <div className="ThirdForms-Preview-PlacePhone">
                    <p className="ThirdForms-Preview-PlacePhone-Label">شماره داروخانه</p>
                    <p className="ThirdForms-Preview-PlacePhone-Value">{props.formik.values.placePhone}</p>
                </div>
                <div className="ThirdForms-Preview-City">
                    <p className="ThirdForms-Preview-City-Label">شهر</p>
                    <p className="ThirdForms-Preview-City-Value">{props.formik.values.city}</p>
                </div>
                <div className="ThirdForms-Preview-District">
                    <p className="ThirdForms-Preview-District-Label">منطقه</p>
                    <p className="ThirdForms-Preview-District-Value">{props.formik.values.district}</p>
                </div>
                <div className="ThirdForms-Preview-WorkingHours">
                    <p className="ThirdForms-Preview-WorkingHours-Label">ساعت کاری</p>
                    <p className="ThirdForms-Preview-WorkingHours-Value">{props.formik.values.district? "شبانه روزی" : "روزانه"}</p>
                </div>
                <div className="ThirdForms-Preview-FullAddress">
                    <p className="ThirdForms-Preview-FullAddress-Label">آدرس دقیق</p>
                    <p className="ThirdForms-Preview-FullAddress-Value">{props.formik.values.fullAddress}</p>
                </div>

                <div className="ThirdForms-Preview-Line"></div>
                    <div className="ThirdForms-Preview-FullName">
                        <p className="ThirdForms-Preview-FullName-Label">نام و نام خانوادگی موسس</p>
                        <p className="ThirdForms-Preview-FullName-Value">{props.formik.values.fullName}</p>
                    </div>
                    <div className="ThirdForms-Preview-MedicId">
                        <p className="ThirdForms-Preview-MedicId-Label">شماره نظام پزشکی</p>
                        <p className="ThirdForms-Preview-MedicId-Value">{props.formik.values.medicId}</p>
                    </div>

                <form className="ThirdForms-Preview-Form"
                 onSubmit={props.formik.handleSubmit}>
                <div className="ThirdForms-Preview-Form-Buttons">
                    <button className="ThirdForms-Preview-Form-Buttons-EditButton" onClick={props.prevStep}>ویرایش اطلاعات</button>
                    <button className="ThirdForms-Preview-Form-Buttons-Submit" type='submit' onClick={SubmitHandler}>تکمیل ثبت نام</button>
                </div>
                </form>
            </div>
        
        </div>


    );
}

export default RegisterPharmacyConfirm;