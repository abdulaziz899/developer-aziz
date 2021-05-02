import React from 'react';

import { faAndroid, faFacebookF, faJs, faReact, faSketch } from '@fortawesome/free-brands-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
    AOS.init(
        {duration:500,offset: 300,}
        )
    return (
        <section className='container pt-5 mt-5'>
            <section className='services  pt-2 text-center'>
                <div className='py-2'>
                    <h4 className=''>Services</h4>
                    <h2 className=''>MY SERVICES</h2>
                    <p>I,m creating responsive web site and web development </p>
                    <div className='borderLine '></div>
                </div>
            </section>
            <div data-aos="fade-down" className=" rowContainer my-5  ">
                    <div className="servicesBox text-center py-5">
                            <Button className='btn-success'><FontAwesomeIcon  icon={faFileCode}/></Button>
                            <h3 className='py-2 '>Web Developer</h3>
                            <p className='pl-2'>The role is responsible for designing, coding and modifying websites, from layout to function and according to a client's specifications. </p>
                    </div>
                    
                        <div className="  servicesBox text-center py-5">
                                <Button className='btn-success'><FontAwesomeIcon  icon={faReact}/></Button>
                                <h3 className='py-2 '>React Developer</h3>
                                <p>your responsibilities will depend on the type of applications you create, the expectations of your employer.</p>
                         
                        </div>
                        <div className="servicesBox text-center py-5">
                                <Button className='btn-success'><FontAwesomeIcon  icon={faJs}/></Button>
                                <h3 className='py-2 '>Javascript Developer</h3>
                                <p>your responsibilities will depend on the type of applications you create, the expectations of your employer.</p>
                        </div>
                </div>
        </section>
    );
};

export default Services;