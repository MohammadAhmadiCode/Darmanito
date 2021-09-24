import React from 'react';


const RegisterPharmacy = (props) => {

    const Control = (error, className) => error
        ? className+" Error" 
        : className

    return(
        <div className="FirstForms">
            <form className="FirstForms-Form"
            onSubmit={props.formik.onSubmit}>

                <div className="FirstForms-Form-FullName">
                    <label className="FirstForms-Form-FullName-Label"
                    htmlFor="fullName"> نام و نام خانوادگی موسس</label>
                    <input className={Control(props.formik.errors.fullName,"FirstForms-Form-FullName-Input")}
                    value={props.formik.values.fullName} onChange={props.formik.handleChange} type="text" name="fullName" />
                    <p className="FirstForms-Form-Error">{props.formik.errors.fullName}</p>
                </div>

                <div className="FirstForms-Form-MedicId">
                    <label className="FirstForms-Form-MedicId-Label"
                    htmlFor="medicId"> شماره نظام پزشکی <span className='FirstForms-Form-MedicId-Label-Span'>(فقط عدد) </span></label>
                    <input className={Control(props.formik.errors.medicId,"FirstForms-Form-MedicId-Input")}
                    value={props.formik.values.medicId} onChange={props.formik.handleChange} type="number" name="medicId"/>
                    <p className="FirstForms-Form-Error">{props.formik.errors.medicId}</p>
                </div>

                <div className="FirstForms-Form-PlaceName">
                    <label className="FirstForms-Form-PlaceName-Label"
                    htmlFor="placeName">نام داروخانه / فروشگاه</label>
                    <input className={Control(props.formik.errors.placeName,"FirstForms-Form-PlaceName-Input")}
                    value={props.formik.values.placeName} onChange={props.formik.handleChange} type="text" name="placeName"/>
                    <p className="FirstForms-Form-Error">{props.formik.errors.placeName}</p>
                </div>

                <div className="FirstForms-Form-PlacePhone">
                    <label className="FirstForms-Form-PlacePhone-Label"
                    htmlFor="placePhone">شماره داروخانه</label>
                    <input className={Control(props.formik.errors.placePhone, "FirstForms-Form-PlacePhone-Input")}
                    value={props.formik.values.placePhone} onChange={props.formik.handleChange} type="number" name="placePhone"/>
                    <p className="FirstForms-Form-Error">{props.formik.errors.placePhone}</p>
                </div>
                
                <div className="FirstForms-Form-City">
                    {/* <label className="FirstForms-Form-City-Label"
                    htmlFor="city">شهر</label>
                    <input className={Control(props.formik.errors.city, "FirstForms-Form-City-Input")}
                    value={props.formik.values.city} type="text" name="city"/> */}
                    

                    <label className="FirstForms-Form-City-Label"
                    htmlFor="city">شهر</label>
                    <select onChange={props.formik.handleChange}
                            className={Control(props.formik.errors.city, "FirstForms-Form-City-Input")} name="city">
                    <option value={props.formik.values.city} >
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
                    <p className="FirstForms-Form-Error">{props.formik.errors.city}</p>
                </div>

                <div className="FirstForms-Form-District">
                    <label className="FirstForms-Form-District-Label"
                    htmlFor="district">منطقه</label>
                    <input className={Control(props.formik.errors.district, "FirstForms-Form-District-Input")}
                    value={props.formik.values.district} onChange={props.formik.handleChange} type="text" name="district"/>
                    <p className="FirstForms-Form-Error">{props.formik.errors.district}</p>
                </div>

                <div className="FirstForms-Form-FullAddress">
                    <label className="FirstForms-Form-FullAddress-Label"
                    htmlFor="fullAddress">آدرس دقیق</label>
                    <input className={Control(props.formik.errors.fullAddress, "FirstForms-Form-FullAddress-Input")}
                    value={props.formik.values.fullAddress} onChange={props.formik.handleChange} type="text" name="fullAddress"/>
                    <p className="FirstForms-Form-Error">{props.formik.errors.fullAddress}</p>
                </div>

                <div className="FirstForms-Form-TimeSection">
                    <div className="FirstForms-Form-Boarding">
                        <p className="FirstForms-Form-Boarding-Label">ساعات کاری</p>
                        <div className="FirstForms-Form-Boarding-Select">
                            <div className="FirstForms-Form-Boarding-True">
                                <label className="FirstForms-Form-Boarding-True-Label"
                                htmlFor="isBoarding">شبانه روزی</label>
                                <input className="FirstForms-Form-Boarding-True-Input"
                                value={true} onChange={props.formik.handleChange} type="radio" name="isBoarding"/>
                            </div>
                            <div className="FirstForms-Form-Boarding-False FirstForms-Form-Boarding-False-Active">
                                <label className="FirstForms-Form-Boarding-False-Label"
                                htmlFor="isBoarding">روزانه</label>
                                <input className="FirstForms-Form-Boarding-False-Input"
                                value={false} onChange={props.formik.handleChange} checked="checked" type="radio" name="isBoarding"/>
                            </div>
                        </div>
                    <p className="FirstForms-Form-Error">{props.formik.errors.isBoarding}</p>
                    </div>

                    <div className="FirstForms-Form-WorkTime">
                        <label className="FirstForms-Form-WorkTime-Label"
                        htmlFor="workTimeRange">ساعات کاری</label>
                        <div>
                            <select
                            className="FirstForms-Form-WorkTime-FromInput" name="workTimeRangeFrom">
                            <option value=''></option>
                                <option value="7 صبح">
                                    7 صبح</option>
                                <option value="8 صبح">
                                    8 صبح</option>
                                <option value="9 صبح">
                                    9 صبح</option>
                                <option value="10 صبح">
                                    10 صبح</option>
                            </select>
                            <select
                            className="FirstForms-Form-WorkTime-FromInput" name="workTimeRangeTo">
                            <option value=''></option>
                                <option value="10 شب">
                                    10 شب</option>
                                <option value="11 شب">
                                    11 شب</option>
                                <option value="12 شب">
                                    12 شب</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="FirstForms-Form-Button">
                    <div className="FirstForms-Form-NextButton">
                        <button className="FirstForms-Form-NextButton-Button" onClick={props.nextStep} 
                        disabled={props.formik.isValid? true: false}>مرحله بعد</button>
                    </div>
                    <div className="FirstForms-Form-UploadButton">
                        <input  type="file" 
                                className="FirstForms-Form-UploadButton-Button"
                                accept="image/*" name='photo' id='photo' value={props.formik.photo} 
                                onChange={(event) => props.formik.setFieldValue('photo', window.URL.createObjectURL(event.currentTarget.files[0]))}/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default RegisterPharmacy;