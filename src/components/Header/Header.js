import { Button } from 'react-bootstrap';
import React from 'react';
import Aziz from '../../Img/aziz.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
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
                        <a href="https://web.facebook.com/profile.php?id=100011076887267" target='_blank'><Button className='btn-primary'> <FontAwesomeIcon icon={faFacebookF}/></Button> </a>
                        <a href="https://twitter.com/DAziz889" target='_blank'><Button className='btn-secondary'><FontAwesomeIcon icon={faTwitter}/></Button></a>
                        <a href="https://www.linkedin.com/in/developer-aziz899/" target='_blank'><Button className='btn-info'><FontAwesomeIcon icon={faLinkedin}/></Button></a>
                        <a href="https://github.com/abdulaziz899" target='_blank'><Button className='btn-dark'><FontAwesomeIcon icon={faGithub}/></Button></a>
                    </div>
                </div>
                <div className='pt-5 my-5'>
                    <img className='imageControl' src={Aziz} alt=""/>
                </div>
            </div>
    );
};

export default Header;