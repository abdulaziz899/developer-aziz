import React from 'react';
import AboutDetail from '../AboutDetails/AboutDetail';
import OtherSkills from '../OtherSkills/OtherSkills';
import WebSkills from '../WebSkills/WebSkills';

const OtherDetail = () => {
    return (
        <div className='container'>
            <AboutDetail></AboutDetail>
            <WebSkills></WebSkills>
            <OtherSkills></OtherSkills>
        </div>
    );
};

export default OtherDetail;