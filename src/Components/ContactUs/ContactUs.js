import React, { useState } from 'react';

import BlueCover from '../UI/BlueCover';
import SimpleMap from '../UI/Map';
import Modal from '../UI/Modal';


import Support from '../Footer/Footer';
import Footer from '../Footer/Support/Support';

const ContactUs = () => {

    const [form,setForm] = useState([
        {
            fullName : '',
            email : '',
            comments : ''
        }
    ])
    const handleFullNameChange = (event) => {
        return setForm({ fullName : event.target.value })
    }
    const handleEmailChange = (event) => {
        return setForm({ email : event.target.value })
    }

    const handleCommentsChange = (event) => {
        return setForm({ comments : event.target.value })
    }

    const SubmitHandler = (event) => {
        event.preventDefault()
        return setPurchasing({...purchasing , Purchasing : true})
    }

    const [purchasing,setPurchasing] = useState ({ Purchasing : false })

    const purchaseCanceleHandler = () => {
        return setPurchasing({...purchasing , Purchasing : false})
    }

    return (
        <div>
            <Modal show={purchasing.Purchasing } 
                   modalClose={purchaseCanceleHandler} 
                   buttonClick={purchaseCanceleHandler}
                   title = ' پیام ارسال شد '
                   text = ' پیام شما با موفقیت ارسال گردید ' />
            <BlueCover text="تماس با ما"/>
            <div className="contactUs">
                <div className="message">
                    <form className="message-Form" onSubmit={SubmitHandler}>
                        <label className="message-Form-Label" >نام و نام خانوادگی</label>
                        <input className="message-Form-Input" 
                            type="text" 
                            placeholder="ایمیل یا شماره همراه" 
                            value={form.fullName}
                            onChange={handleFullNameChange}
                            required/>
                        <label className="message-Form-Label" >ایمیل یا شماره همراه</label>
                        <input className="message-Form-Input" 
                            type="email" 
                            placeholder="ایمیل یا شماره همراه" 
                            value={form.email}
                            onChange={handleEmailChange}
                            required/>
                        <label className="message-Form-Label" >پیام شما</label>
                        <textarea className="message-Form-Textarea" 
                            placeholder="ایمیل یا شماره همراه"
                            value={form.comments}
                            onChange={handleCommentsChange}
                            required
                        ></textarea>
                        <button className="message-Form-Button">
                            <p className='message-Form-Button-Text'>ارسال پیام</p>
                        </button>
                    </form>
                </div>
                <div className='Map'> 
                    <div className="map-Texts">
                        <div>
                            <p className='map-Texts-Titles'>آدرس</p>
                            <div className='map-Texts-Address'>تهران طرشت خیابان شهید چوب تراش <br/> خیابان شهید حسین مردی بن بست پنجم پلاک 15 واحد 1</div>
                        </div>
                        <div className="map-Items">
                            <div className='map-Items-email'>
                                <div className='map-Texts-Titles'>ایمیل</div>
                                <div className="map-Texts-Email">info@nahiraTech.com</div>
                            </div>
                            <div className='map-Items-number'>
                                <div className='map-Texts-Titles'>شماره ثابت</div>
                                <p className="map-Texts-Phone">09912515020</p>
                            </div>
                        </div>
                    </div>
                    <SimpleMap/>
                </div>
            </div>
            <Footer/>
            <Support/>      
        </div>
    );
}

export default ContactUs