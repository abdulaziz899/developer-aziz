import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './WebSkills.css';

const WebSkills = () => {
    const history =useHistory();
    const handleTouch=()=>{
        history.push('/webSkill')
    }
    return (
        <div>
           <section>
                <h2 className='text-center '>MY SKILLS</h2>
                <div className='skillContainer'>
                    <button onClick={handleTouch} type="button"  className='btn btn-outline-success active'>Web</button>
                    <Link to='/other'><button className='btn btn-outline-success'>Other</button></Link> 
                    <Link to='/programing'><button className='btn btn-outline-success'>Programming</button></Link>
                    <Link to='/tools'><button  className='btn btn-outline-success'>Tools</button></Link>
                </div>
            </section>
        </div>
    );
};

export default WebSkills;