import React from 'react';
import AboutDetail from '../AboutDetails/AboutDetail';
import AddWebSkill from '../AddWebSkill/AddWebSkill';
import New from '../New/New';
import WebDetail from '../WebDetail/WebDetail';
import WebSkills from '../WebSkills/WebSkills';

const AboutHome = () => {
    return (
        <div className='container'>
            <AboutDetail></AboutDetail>
            <WebSkills></WebSkills>
            <AddWebSkill></AddWebSkill>
        </div>
    );
};

export default AboutHome;