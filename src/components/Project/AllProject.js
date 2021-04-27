import React, { useState } from 'react';
import Doctors from '../../Img/doctors.png';
import SureToShop from '../../Img/SureToShop.png';
import CarCare from '../../Img/carCare.png';
import FoodInfinity from '../../Img/foodInfinity.png';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faHome } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import Project from './Project';


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
            <div className='mt-5 pt-5'>
                <Project></Project>
            </div>
            <div className="row mt-5 mx-2 pb-5">
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
    </section>
    );
};

export default AllProject;