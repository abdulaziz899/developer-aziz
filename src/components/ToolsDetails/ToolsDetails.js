import React from 'react';
import AboutDetail from '../AboutDetails/AboutDetail';
import ToolsSkills from '../ToolsSkills/ToolsSkills';
import WebSkills from '../WebSkills/WebSkills';

const ToolsDetails = () => {
    return (
        <div className='container'>
            <AboutDetail></AboutDetail>
            <WebSkills></WebSkills>
            <ToolsSkills></ToolsSkills>
        </div>
    );
};

export default ToolsDetails;