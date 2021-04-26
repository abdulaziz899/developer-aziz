import React from 'react';
import AboutDetail from '../AboutDetails/AboutDetail';
import AboutHome from '../AboutHome/AboutHome';
import ProgramingSkills from '../ProgramingSkills/ProgramingSkills';
import WebSkills from '../WebSkills/WebSkills';

const ProgramingDetail = () => {
    return (
        <div  className='container'>
            <AboutDetail></AboutDetail>
            <WebSkills></WebSkills>
            <ProgramingSkills></ProgramingSkills>
        </div>
    );
};

export default ProgramingDetail;