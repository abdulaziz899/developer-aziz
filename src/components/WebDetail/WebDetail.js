import React from 'react';
import AboutDetail from '../AboutDetails/AboutDetail';
import AddWebSkill from '../AddWebSkill/AddWebSkill';
import WebSkills from '../WebSkills/WebSkills';

const WebDetail = () => {
    return (
        <div className='container'>
            <AboutDetail></AboutDetail>
            <WebSkills></WebSkills>
            <AddWebSkill></AddWebSkill>
        </div>
    );
};

export default WebDetail;