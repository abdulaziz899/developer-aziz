import { faDribbble, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <footer className="site-footer mt-5">
            <div className="container">
                <div className="row  text-white">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className='text-white text-capitalize'>
                            <h2>Hi There</h2>
                            hello I,m Aziz ,I,m web developer individual build website creating software and application .
                            i am javascript and react lover , i am many existing project javascript and react .
                            <h5>best trying my skills develop regular .</h5> 
                        </p>
                    </div>
    
                    <div className="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul class="footer-links  text-white">
                            <li><a href="#">HTML5</a></li>
                            <li><a href="#">CSS3</a></li>
                            <li><a href="#">Ui Design</a></li>
                            <li><a href="#">React</a></li>
                            <li><a href="#">Javascript</a></li>
                            <li><a href="#">Bootstrap-4</a></li>
                        </ul>
                    </div>
    
                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><a href=""><Link to='/About'>About Us</Link></a></li>
                            <li><a href=""><Link to='/contact'>Contact Us</Link></a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
            </div>
            <hr/>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                    <p className="copyright-text ">Copyright &copy; 2021 by Abdul Aziz</p>
                </div>
        
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <ul class="social-icons">
                    <li><a class="facebook" href="#"> <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> </a></li>
                    <li><a class="twitter" href="#"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
                    <li><a class="dribbble" href="#"><FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon></a></li>
                    <li><a class="linkedin" href="#"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a></li>   
                    </ul>
                </div>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;