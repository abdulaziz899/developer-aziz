import React from 'react';

import { faAndroid, faFacebookF, faJs, faReact, faSketch } from '@fortawesome/free-brands-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <section className='container pt-5 mt-5'>
            <section className='services  pt-2 text-center'>
                <div className='py-2'>
                    <h4 className='text-danger'>Services</h4>
                    <h2 className='text-info'>MY SERVICES</h2>
                    <p>I,m creating responsive web site and web development </p>
                    <div className='borderLine '></div>
                </div>
            </section>
            <section>
            <div className="row rowContainer  ">
                    <div className="col-lg-4  my-3 col-md-6 col-sm-12  text-center py-5">
                        <div className='servicesBox '>
                            <Button className='btn-success'><FontAwesomeIcon  icon={faFileCode}/></Button>
                            <h3 className='py-2 text-info'>Web Development</h3>
                            <p>The role is responsible for designing, coding and modifying websites, from layout to function and according to a client's specifications. </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6   my-3  col-sm-12 text-center py-5">
                        <div className='servicesBox'>
                            <Button className='btn-success'><FontAwesomeIcon  icon={faSketch}/></Button>
                            <h3 className='py-2 text-info'>Web Designer</h3>
                            <p>A web designer is responsible for creating the design and layout of a website or web pages.</p>
                        </div>
                    </div>
                    <div className="col-lg-4  my-3  col-md-6 col-sm-12  text-center py-5">
                        <div className='servicesBox'>
                            <Button className='btn-success'><FontAwesomeIcon  icon={faAndroid}/></Button>
                            <h3 className='py-2 text-info'>Android Development</h3>
                            <p>An Android developer is responsible for developing applications for devices powered by the Android operating system. Due to the fragmentation of this ecosystem.</p>
                        </div>
                    </div>
                </div>
                <div className="row rowContainer mt-2">
                    <div className="col-lg-4  col-md-6 col-sm-12  text-center py-5">
                            <div className='servicesBox'>
                                <Button className='btn-success'><FontAwesomeIcon  icon={faDesktop}/></Button>
                                <h3 className='py-2 text-info'>Desktop Development</h3>
                                <p>your responsibilities will depend on the type of applications you create, the expectations of your employer.</p>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-6 col-sm-12  text-center py-5">
                            <div className=' servicesBox'>
                                <Button className='btn-success'><FontAwesomeIcon  icon={faReact}/></Button>
                                <h3 className='py-2 text-info'>React Development</h3>
                                <p>your responsibilities will depend on the type of applications you create, the expectations of your employer.</p>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-6 col-sm-12  text-center py-5">
                            <div className='servicesBox'>
                                <Button className='btn-success'><FontAwesomeIcon  icon={faJs}/></Button>
                                <h3 className='py-2 text-info'>Javascript Development</h3>
                                <p>your responsibilities will depend on the type of applications you create, the expectations of your employer.</p>
                            </div>
                        </div>
                </div>
            </section>
            
        </section>
    );
};

export default Services;