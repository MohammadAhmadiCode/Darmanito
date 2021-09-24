import React, {useState} from 'react';

import shortid from 'short-id';

import TermAndConditionsIcon from './TermAndConditionsIcon/TermAndConditionsIcon'

const TermAndConditionsList = () => {
    const [terms, setTerms] = useState([
        {
            title:"قوانین عضویت حساب کاربری",
            description: `
            کاربر موظف است با شماره تلفنی که به نام شخص خود هست ثبت نام کند و در غیر این صورت مسئولیت ثبت نام در داروکو و سفارشات ارسالی با فردی است که شماره تلفن ثبت نامی به نام او می باشد.
            
            
            کاربران حق ندارند به سایر اشخاص حقیقی و حقوقی اجازه استفاده از حساب کاربری خود را بدهند در غیر این صورت مسئولیت تمامی امور بر عهده شخص صاحب حساب و در نتیجه شخصی است که شماره تلفن ثبت نامی به نام او می باشد.
            
            
            در صورتی که هنگام تحویل دادن سفارش به کاربر، فاکتور مهر شده ی داروخانه همراه با سفارش کاربر نباشد، کاربر باید از گرفتن سفارش خودداری نموده و پیک داروخانه موظف است سفارش را برگردانده و مجددا همراه با فاکتور داروخانه به دست کاربر برساند.
            
            
            کاربران هنگام ثبت سفارش باید اطلاعات دقیق و درست از محل سکونت خود و توضیحات مورد نظر و کامل برای ویژگی های سفارش بنویسند.
            `,
            active: true,
            id: shortid.generate()
        },
        {
            title:"قوانین داروخانه",
            description: `قوانین داروخانه`,
            active: false,
            id: shortid.generate()
        },
        {
            title:"قوانین فروشگاه",
            description: `قوانین فروشگاه`,
            active: false,
            id: shortid.generate()
        },
        {
            title:"قوانین مشاوره آنلاین",
            description: `قوانین مشاوره آنلاین`,
            active: false,
            id: shortid.generate()
        }
    ]);

    const switchTerm = (id) => {
        const newTerms = terms.map((terms) => {
                terms.id === id
                ? terms.active = true
                : terms.active = false;
                return(terms);
        });
        setTerms(newTerms);
    }

    return (
        <div className="TermAndConditionsList">
            <h2 className="TermAndConditionsList-Title">کاربران باید این توافق‌نامه را مطالعه و سپس اقدام به عضویت و ... نمایند</h2>
            <div className="TermAndConditionsList-Icon">
            {terms.map((terms, index) => {
                return(
                    <div key={index}>
                        <TermAndConditionsIcon
                        title={terms.title}
                        active={terms.active}
                        key={terms.id}
                        click={()=> switchTerm(terms.id)}/>
                    </div>
                );
            })}
            </div>
            <div className='TermAndConditionsList-Description'>
                {terms.map((terms)=> 
                    terms.active
                    ? <p className="TermAndConditionsList-Description-Text" 
                         key={shortid.generate()} >
                             {terms.description}
                    </p>
                    : null)}
            </div>
        </div>
    );
}

export default TermAndConditionsList;