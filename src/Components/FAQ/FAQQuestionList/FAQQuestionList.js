import React from 'react';

import shortid from 'short-id';

import FAQQuestion from './FAQQuestion/FAQQuestion';


const faqQuestions = [
    {
        title: "هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟",
        text: "404 not found.",
        id: shortid.generate(),
        active : false
    },
    {
        title: "هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟ ",
        text: "404 not found.",
        id: shortid.generate(),
        active : false
    },
    {
        title: "آیا درمانیتو در کرج هم فعالیت میکند؟",
        text: "خیر، ما هم اکنون در تهران در حال فعالیت هستیم.",
        id: shortid.generate(),
        active : true
    },
    {
        title: "هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟ ",
        text: "404 not found",
        id: shortid.generate(),
        active : false
    },
];

const FaqQuestionList = () => {
    return(
        <div className="FAQQuestion-List">
            {faqQuestions.map((faqQuestions,index) => {
                return(
                    <FAQQuestion
                    title={faqQuestions.title}
                    text={faqQuestions.text}
                    active={faqQuestions.active}
                    key={index}/>
                    );
                })}
            </div>
    );
}

export default FaqQuestionList;