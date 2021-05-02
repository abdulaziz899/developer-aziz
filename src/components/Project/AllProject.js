import React, { useState } from 'react';
import Doctors from '../../Img/doctors.png';
import SureToShop from '../../Img/SureToShop.png';
import CarCare from '../../Img/carCare.png';
import FoodInfinity from '../../Img/foodInfinity.png';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowCircleRight, faHome } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllProject = () => {
    const history =useHistory();
    const handleAboutMe=()=>{
        history.push('/About');
    };
    
    AOS.init(
        {duration:2000,offset: 300,}
        )
    return (
        <section className='mt-5 container pt-5'>
            <h3 className='ml-5 pl-5'>all Success Full Working Project .....  
                    <Button style={{width:"150px"}} onClick={handleAboutMe} className='btn-success '>About Me<FontAwesomeIcon className='ml-3' icon={faArrowAltCircleRight}></FontAwesomeIcon> </Button> </h3>
                <div data-aos="zoom-in-up" className="projectHomeContainer my-5">
                    <div className="text-center text-capitalize  projectBox">
                            <div className='projectImG'>
                                <img  src={FoodInfinity} alt=""/>
                                <div className='codeLink'>
                                    <button className="btn btn-success rounded-pill"> <a className='text-decoration-none text-white' href="https://github.com/abdulaziz899/InfinityFoodClient" target="_blank">Code</a> </button>
                                    <button className="btn btn-success rounded-pill"> <a className='text-decoration-none text-white' href="https://taste-food-6913d.web.app/" target="_blank">Live Site</a> </button>
                                </div>
                            </div>
                            <h2>Food Infinity</h2>
                                <p>admin controls online food shop ,user buy any food and filter breakfast ,dinner,lunch .
                                    user can cart add buy now .
                                </p>
                                <button className="btn btn-success">React</button>
                                <button className="btn btn-success">Node</button>
                                <button className="btn btn-success">Express</button>
                                <button className="btn btn-success">Firebase</button>
                                <button className="btn btn-success">Mongodb</button>
                                <button className="btn btn-success"> Router </button>
                                <button className="btn btn-success">Heroku</button>
                            
                    </div>
                    <div className="text-center text-capitalize projectBox">
                            <div className='projectImG'>
                                <img  src={CarCare} alt=""/>
                                <div className='codeLink'>
                                    <button className="btn btn-success rounded-pill"> <a className='text-decoration-none text-white' href="https://github.com/abdulaziz899/CarCareIndustry" target="_blank">Code</a> </button>
                                    <button className="btn btn-success rounded-pill"> <a className='text-decoration-none text-white' href="https://car-care-68c20.web.app/" target="_blank">Live Site</a> </button>
                                </div>
                            </div>
                        <h2>Car Care Industry </h2>
                            <p> car care web site , 
                                using private route and redirect system . 
                                customer book and payment service . web site full admin controls 
                            </p>
                            <button className="btn btn-success">React</button>
                            <button className="btn btn-success">React Router</button>
                            <button className="btn btn-success">Node</button>
                            <button className="btn btn-success">Express</button>
                            <button className="btn btn-success">Firebase </button>
                            <button className="btn btn-success">Mongodb</button>
                            <button className="btn btn-success">React-bootstrap</button>
                    </div>
                    <div className="text-center text-capitalize projectBox">
                            <div className='projectImG'>
                                <img  src={Doctors} alt=""/>
                                <div className='codeLink'>
                                    <button className="btn btn-success rounded-pill"> <a className='text-decoration-none text-white' href="https://github.com/abdulaziz899/doctor-protal-client-site" target="_blank">Code</a> </button>
                                    <button className="btn btn-success rounded-pill"> <a className='text-decoration-none text-white' href="https://doctor-protal-500ba.web.app/" target="_blank">Live Site</a> </button>
                                </div>
                            </div>
                        <h2>Doctors Portal</h2>
                            <p>Doctor Web site ,PrivateRoute & Redirect . 
                                patient  get appointment any date .
                                patient see your appointment filter date and log in email . 
                            </p>
                            <button className="btn btn-success">React</button>
                            <button className="btn btn-success">Node</button>
                            <button className="btn btn-success">Express</button>
                            <button className="btn btn-success">Router</button>
                            <button className="btn btn-success">Mongodb</button>
                            <button className="btn btn-success">Heroku</button>
                            <button className="btn btn-success">Material Ui</button>
                    </div>
                    <div className="text-center text-capitalize projectBox">
                            <div className='projectImG'>
                                <img  src={SureToShop} alt=""/>
                                <div className='codeLink'>
                                    <button className="btn btn-success rounded-pill"> <a className='text-decoration-none text-white' href="https://github.com/abdulaziz899/SureToShop" target="_blank">Code</a> </button>
                                    <button className="btn btn-success rounded-pill"> <a className='text-decoration-none text-white' href="https://fullstact-client-site.web.app/" target="_blank">Live Site</a> </button>
                                </div>
                            </div>
                        <h2>Sure To Shop</h2>
                            <p>Online phone buy shop , using private route and redirect .
                                working system ,normal user see your previous order .
                                admin add and delete any product  .
                            </p>
                            <button className="btn btn-success">React</button>
                            <button className="btn btn-success">Node</button>
                            <button className="btn btn-success">Express</button>
                            <button className="btn btn-success">Firebase</button>
                            <button className="btn btn-success">Mongodb</button>
                            <button className="btn btn-success"> Bootstrap-4 </button>
                            <button className="btn btn-success">Heroku</button>
                </div>
            </div>
                    
        </section>
    );
};

export default AllProject;