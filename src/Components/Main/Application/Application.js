import React from 'react';

import ApplicationDoctorImage from './ApplicationDoctorImage/ApplicationDoctorImage';
import ApplicationItems from './ApplicationItems/ApplicationItems';

const Application = () => {
    return (
            <div className="application">
                <ApplicationDoctorImage/>
                <ApplicationItems/>
            </div>
    );
}

export default Application;