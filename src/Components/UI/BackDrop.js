import React from 'react';

const BackDrop = (props) => {
    return props.show ? <div className='backDrop' onClick={props.clicked}></div> : null ;
}

export default BackDrop;

