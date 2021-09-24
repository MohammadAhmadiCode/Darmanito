import React, {useState} from 'react';

const FAQQuestion = (props) => {

    const [questionList, setQuestionList] = useState({isActive: false});
    const switchQuestionList = () => {
        setQuestionList({isActive: !questionList.isActive})
        }

    return(
        <div key={props.id} className="FAQQuestion" onClick={switchQuestionList}>
            <div className="FAQQuestion-Title">
                {questionList.isActive
                    ? <i className="FAQQuestion-Title-MinesIcon fa fa-minus "></i>
                    : <i className="FAQQuestion-Title-PlusIcon fa fa-plus "></i>
                }
                <p className="FAQQuestion-Title-Text">{props.title}</p>
            </div>
            <div className="FAQQuestion-Texts">
                {questionList.isActive
                    ? <p className="FAQQuestion-Texts-Text">{props.text}</p>
                    : null
                }
            </div>
            <div className="FAQQuestion-Line"></div>
        </div>
    );
}

export default FAQQuestion;