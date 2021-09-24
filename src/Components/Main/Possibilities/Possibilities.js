import React, {useState} from 'react';

import shortid from 'short-id';

import PossibilitiesImages from './PossibilitiesImages/PossibilitiesImages';

import pharmacy from '../../../Assets/Images/Main/pharmacy.svg';
import market from '../../../Assets/Images/Main/market.svg';
import onlineVisit from '../../../Assets/Images/Main/onlineVisit.svg';
import onlineSchedule from '../../../Assets/Images/Main/onlineSchedule.svg';
import down from '../../../Assets/Images/Main/down.svg';
import check from '../../../Assets/Images/Main/check.svg';



const Possibilities = () => {
    const [possibilities, setPossibilities] = useState([
        {
            title: 'داروخانه',
            image: pharmacy,
            description: 'در سرویس داروخانه شما می توانید نسخه دارویی یا محصول بهداشتی خودتون رو برای پیدا شدن به داروخانه و فروشگاه ها سفارش بدید.',
            step1: 'وارد بخش سفارش با عکس نسخه شوید و عکس و توضیحات را وارد کنید',
            step2: 'بعد از ارسال عکس نسخه، باید آدرس محل خودتون رو وارد کنید',
            step3: 'اگر نتیجه جستجوی نسخه موفقیت آمیز باشه باید منتظر تحویل سفارش باشید',
            active: true,
            id: shortid.generate(),
        },
        {
            title: 'فروشگاه',
            image: market,
            description: 'در سرویس فروشگاه شما می توانید تمامی محصولات بهداشتی خودتون رو برای پیدا شدن به فروشگاه ها سفارش بدید',
            step1: 'Soon وارد بخش سفارش با عکس نسخه شوید و عکس و توضیحات را وارد کنید',
            step2: 'Soon بعد از ارسال عکس نسخه، باید آدرس محل خودتون رو وارد کنید',
            step3: 'Soon اگر نتیجه جستجوی نسخه موفقیت آمیز باشه باید منتظر تحویل سفارش باشید',
            active: false,
            id: shortid.generate(),
        },
        {
            title: 'ویزیت آنلاین',
            image: onlineVisit,
            description: 'Comming Soon به زودی',
            step1: 'Comming Soon به زودی',
            step2: 'Comming Soon به زودی',
            step3: 'Comming Soon به زودی',
            active: false,
            id: shortid.generate(),
        },
        {
            title: 'نوبت دهی آنلاین',
            image: onlineSchedule,
            description: 'به زودی',
            step1: 'به زودی',
            step2: 'به زودی',
            step3: 'به زودی',
            active: false,
            id: shortid.generate(),
        },
    ]);
    const switchPossibilities = (id) => {
        possibilities.map((possibilities) => {
            return(possibilities);
        })
        setPossibilities(
            possibilities.map((possibilities) => {
            possibilities.id === id
            ? possibilities.active = true
            : possibilities.active = false
            return(possibilities);
        })
        )
    }
    return(
        <div className="possibilities">
            <h2 className="possibilities-Title">امکانات درمانیتو</h2>
            <div className="possibilities-Icons">
                {possibilities.map((possibilities) => (
                    <PossibilitiesImages
                    title={possibilities.title}
                    image={possibilities.image}
                    active={possibilities.active}
                    click={()=>switchPossibilities(possibilities.id)}
                    key={possibilities.id}/>
                ))}
            </div>
            <div className="possibilities-Info">
                {possibilities.filter((possibilities)=> possibilities.active === true).map((possibilities) => {
                    return(
                        <div key={possibilities.description}>
                            <p className='f4'> {possibilities.title} </p>
                            <p className="possibilities-Info-Description">
                                {possibilities.description}
                            </p>
                            <div className="possibilities-Info-Step1">
                                <div>
                                    <img className="possibilities-Info-Step1-Image" src={down} alt="down"/>
                                    <p><strong>قدم اول</strong></p>
                                </div>
                                <p className="possibilities-Info-Step1-Description">{possibilities.step1}</p>
                            </div>
                            <div className="possibilities-Info-Step2">
                                <div>
                                    <img className="possibilities-Info-Step2-Image" src={down} alt="down"/>
                                    <p><strong>قدم دوم</strong></p>
                                </div>
                                <p className="possibilities-Info-Step2-Description">{possibilities.step2}</p>
                            </div>
                            <div className="possibilities-Info-Step3">
                                <div>
                                    <img className="possibilities-Info-Step3-Image" src={check} alt="check"/>
                                    <p><strong>قدم سوم</strong></p>
                                </div>
                                <p className="possibilities-Info-Step3-Description">{possibilities.step3}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Possibilities;