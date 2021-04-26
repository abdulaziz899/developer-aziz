import React, { useState } from 'react';
import Doctors from '../../Img/doctors.png';
import SureToShop from '../../Img/SureToShop.png';
import CarCare from '../../Img/carCare.png';
import FoodInfinity from '../../Img/foodInfinity.png';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faHome } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';


const AllProject = () => {
    const history =useHistory();
    const AboutMe=()=>{
        history.push('/About');
    }
    const goHome=()=>{
        history.push('/');
    }
    return (
        <section className='mt-5 mx-3'>
            <div className='d-flex justify-content-between'>
                    <div>
                        <h3 className=''>All  Working Project ..... <button onClick={AboutMe} className="btn btn-info">About Me <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon> </button> </h3>
                    </div>
                    <div className="positions">
                        <Button onClick={goHome} className='btn-primary'> <FontAwesomeIcon className='mr-3' icon={faHome}></FontAwesomeIcon> Home</Button>
                    </div>
                </div>
            <div className=''>
                
            <div className="row my-5">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="text-center text-capitalize projectBox">
                        <div>
                            <div className='projectImG'>
                                <img  src={FoodInfinity} alt=""/>
                            </div>
                            <div className='codeLink'>
                                <button className="btn btn-info rounded-pill"> <a className='text-decoration-none text-white' href="https://github.com/abdulaziz899/InfinityFoodClient" target="_blank">Code</a> </button>
                                <button className="btn btn-info rounded-pill"> <a className='text-decoration-none text-white' href="https://taste-food-6913d.web.app/" target="_blank">Live Site</a> </button>
                            </div>
                        </div>
                        <h2>Food Infinity</h2>
                            <p>it is online food shop ,working system ,user buy any food and filter breakfast ,dinner,lunch .
                                user can cart add order success .
                                this web site admin controls.
                            </p>
                        <div>
                            <button className="btn btn-success">React</button>
                            <button className="btn btn-success">Node</button>
                            <button className="btn btn-success">Express</button>
                            <button className="btn btn-success">Firebase</button>
                            <button className="btn btn-success">Mongodb</button>
                            <button className="btn btn-success">React Router </button>
                            <button className="btn btn-success">Heroku</button>

                        </div>
                    </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="text-center text-capitalize projectBox">
                        <div>
                            <div className='projectImG'>
                                <img  src={CarCare} alt=""/>
                            </div>
                            <div className='codeLink'>
                                <button className="btn btn-info rounded-pill"> <a className='text-decoration-none text-white' href="https://github.com/abdulaziz899/CarCareIndustry" target="_blank">Code</a> </button>
                                <button className="btn btn-info rounded-pill"> <a className='text-decoration-none text-white' href="https://car-care-68c20.web.app/" target="_blank">Live Site</a> </button>
                            </div>
                        </div>
                        <h2>Car Care Industry </h2>
                            <p> car care web site , 
                                using private route and redirect system . 
                                customer book and payment service . web site full admin controls 
                            </p>
                        <div>
                            <button className="btn btn-success">React</button>
                            <button className="btn btn-success">React Router</button>
                            <button className="btn btn-success">Node</button>
                            <button className="btn btn-success">Express</button>
                            <button className="btn btn-success">Firebase </button>
                            <button className="btn btn-success">Mongodb</button>
                            <button className="btn btn-success">React-bootstrap</button>
                        </div>
                    </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="text-center text-capitalize projectBox">
                        <div>
                            <div className='projectImG'>
                                <img  src={Doctors} alt=""/>
                            </div>
                            <div className='codeLink'>
                                <button className="btn btn-info rounded-pill"> <a className='text-decoration-none text-white' href="https://github.com/abdulaziz899/doctor-protal-client-site" target="_blank">Code</a> </button>
                                <button className="btn btn-info rounded-pill"> <a className='text-decoration-none text-white' href="https://doctor-protal-500ba.web.app/" target="_blank">Live Site</a> </button>
                            </div>
                        </div>
                        <h2>Doctors Portal</h2>
                            <p>Doctor Web site ,PrivateRoute & Redirect . 
                                patient  get appointment any date .
                                patient see your appointment filter date and log in email . 

                            </p>
                        <div>
                            <button className="btn btn-success">React</button>
                            <button className="btn btn-success">Node</button>
                            <button className="btn btn-success">Express</button>
                            <button className="btn btn-success">Router</button>
                            <button className="btn btn-success">Mongodb</button>
                            <button className="btn btn-success">Heroku</button>
                            <button className="btn btn-success">Material Ui</button>

                        </div>
                    </div>
            </div>

            </div>


            <div className="row mt-5 pb-5">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="text-center text-capitalize projectBox">
                        <div>
                            <div className='projectImG'>
                                <img  src={SureToShop} alt=""/>
                            </div>
                            <div className='codeLink'>
                                <button className="btn btn-info rounded-pill"> <a className='text-decoration-none text-white' href="https://github.com/abdulaziz899/SureToShop" target="_blank">Code</a> </button>
                                <button className="btn btn-info rounded-pill"> <a className='text-decoration-none text-white' href="https://fullstact-client-site.web.app/" target="_blank">Live Site</a> </button>
                            </div>
                        </div>
                        <h2>Sure To Shop</h2>
                            <p>Online phone buy shop , using private route and redirect .
                                working system ,normal user see your previous order .
                                admin add and delete any product  .
                            </p>
                        <div>
                            <button className="btn btn-success">React</button>
                            <button className="btn btn-success">Node</button>
                            <button className="btn btn-success">Express</button>
                            <button className="btn btn-success">Firebase</button>
                            <button className="btn btn-success">Mongodb</button>
                            <button className="btn btn-success"> Bootstrap-4 </button>
                            <button className="btn btn-success">Heroku</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default AllProject;