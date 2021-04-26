import { Button } from 'react-bootstrap';
import React from 'react';
import Aziz from '../../Img/aziz.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { useHistory } from 'react-router';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
        const history=useHistory();
        const handleTouch=()=>{
            history.push('/contact');
        };
        const handleAboutMe=()=>{
            history.push('/About');
        };
        
    return (
        <div className='d-lg-flex justify-content-between  d-md-block d-sm-block'>
                <div className='details '>
                    <h2>I am MD ABDUL AZIZ </h2>
                    <h5 className='w-75 pb-3'>I,m Aziz ,professional web developer ,join 2020 in this field  </h5>
                    <Button style={{width:"200px"}} onClick={handleTouch} className='btn-success '>Get in touch  <FontAwesomeIcon className='ml-3' icon={faArrowAltCircleRight}></FontAwesomeIcon> </Button>
                    <Button style={{width:"150px"}} onClick={handleAboutMe} className='btn-success '>About Me<FontAwesomeIcon className='ml-3' icon={faArrowAltCircleRight}></FontAwesomeIcon> </Button>
                    <div className=''>
                        <h2 className=' py-4'>Contact Now </h2>
                        <Button className='btn-primary'><FontAwesomeIcon icon={faFacebookF}/></Button>
                        <Button className='btn-primary'><FontAwesomeIcon icon={faFacebookF}/></Button>
                        <Button className='btn-primary'><FontAwesomeIcon icon={faFacebookF}/></Button>
                    </div>
                </div>
                <div className='pt-5 my-5'>
                    <img className='imageControl' src={Aziz} alt=""/>
                </div>
            </div>
    );
};

export default Header;