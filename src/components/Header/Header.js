import { Button } from 'react-bootstrap';
import React from 'react';
import Aziz from '../../Img/azizBack.png'
import TextAnimation from "react-animate-text";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useHistory } from 'react-router';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import Typing from 'react-typing-animation';
const Header = () => {
        const history=useHistory();
        const handleTouch=()=>{
            history.push('/contact');
        };
        const handleAboutMe=()=>{
            history.push('/About');
        };
        
    return (
        <div className="container">
            <div className='headerContainers justify-content-between  '>
                <div className='details'>
                    
                    <h2>Hello!!!</h2>
                    <Typing >
                        <h5 className='w-100 text-success'>I,m Aziz ,Front-End web developer (React)</h5>
                        <Typing.Backspace count={31} />
                    </Typing>
                    <p>I am attractive, Responsive,Inventor web developer, join 2020 in this field</p>
                    <Button style={{width:"200px"}} onClick={handleTouch} className='btn-success '>Get in touch  <FontAwesomeIcon className='ml-3' icon={faArrowAltCircleRight}></FontAwesomeIcon> </Button>
                    <Button style={{width:"150px"}} onClick={handleAboutMe} className='btn-success '>About Me<FontAwesomeIcon className='ml-3' icon={faArrowAltCircleRight}></FontAwesomeIcon> </Button>
                    <div className='iconsButton'>
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
        </div>
    );
};

export default Header;