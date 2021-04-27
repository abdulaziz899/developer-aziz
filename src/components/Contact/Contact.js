import { faFileAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aziz from '../../Img/aziz.png'
import Footer from '../Footer/Footer';
import './Contact.css';

const Contact = () => {
    return (
        <div className='' >
        <div className='contactContainer container  py-5'>
            <div className='row mt-5 '>
                    <div className="col-md-6 col-sm-12">
                        <img className='imageControls' src={Aziz} alt=""/>
                    </div>
                    <div className="col-md-6 col-sm-12 aboutContainer" >
                        <h1>Hi There </h1>
                        <p>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>
                        <h3>Name : MD ABDUL AZIZ</h3>
                        <h4>Phone : +8801776978991</h4>
                        <h5>Email :abdulaziz0170934@gmail.com</h5>
                        <h4>Linkenden : <a className=' text-decoration-none' href="https://www.facebook.com/profile.php?id=100011076887267" target='_blank'>Click & Contact</a></h4>
                        <h4>Facebook : <a className=' text-decoration-none' href="https://www.facebook.com/profile.php?id=100011076887267" target='_blank'>Click & Contact</a></h4>
                        <Link ><Button className='btn-danger m-3'><FontAwesomeIcon className='mr-3' icon={faFileAlt}></FontAwesomeIcon> Resume</Button></Link>
                        <Link to='/'><Button className='btn-primary m-3'> <FontAwesomeIcon className='mr-3' icon={faHome}></FontAwesomeIcon> Home</Button></Link>
                        
                    </div>
            </div>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;