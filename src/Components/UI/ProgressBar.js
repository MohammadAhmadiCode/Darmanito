import React from 'react';

const ProgressBar = (props) => {
    return(
        <div className="progressBar">
            <p className="progressBar-Label">{props.value}% درصد تکمیل شده است</p>
            <div className="progressBar-Background">
                <div className="progressBar-Progress"
                     style={{width:`${props.value}%`}}>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;