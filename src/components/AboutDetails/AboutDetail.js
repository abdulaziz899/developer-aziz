import { faArrowAltCircleRight, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import dev from '../../Img/aaasvg.svg';
import './AboutDetail.css'

const AboutDetail = () => {
    const history=useHistory();
    const handleTouch=()=>{
        history.push('/contact');
    };
    const goHome=()=>{
        history.push('/');
    };
    
    return (
        <div className='py-5 container'>
            <section className='my-5'>
                <div className='row my-5'>
                    <div className=' col-lg-6 col-sm-12 my-5 py-5'>
                        <h2 className='text-info'>ABOUT ME</h2>
                        <ul className='d-flex w-75 justify-content-between'>
                            <li>Web Developer</li>
                            <li>Programmer</li>
                        </ul>
                        <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript and react . To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities. </p>
                        
                        <Button onClick={handleTouch} className='btn-success'>Get in touch  <FontAwesomeIcon className='ml-3' icon={faArrowAltCircleRight}></FontAwesomeIcon> </Button>
                    </div>
                    <div className='col-lg-6 col-sm-12 text-center'>
                        <img className='imgLaptop img-fluid' src={dev} alt=""/>
                    </div>
                </div>
            </section>
            <div className="goHomeBottom">
                <Button  onClick={goHome} className=' btn-success'> <FontAwesomeIcon className='mr-3' icon={faHome}></FontAwesomeIcon> Home</Button>
            </div>
        </div>
    );
};

export default AboutDetail;