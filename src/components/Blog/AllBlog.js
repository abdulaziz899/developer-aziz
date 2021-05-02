import { faArrowAltCircleRight, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Js from '../../Img/js.png'
import ReactOr from '../../Img/reactOr.png';
import ReactRoute from '../../Img/router.png';
import Footer from '../Footer/Footer';
import './Blog.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AllBlog = () => {
    const history=useHistory();
    const handleTouch=()=>{
        history.push('/contact');
    };
    const goHome=()=>{
        history.push('/');
    };
    AOS.init(
        {duration:1000,offset: 300,}
        )
    return (
    <div className =' pt-5 mt-5'>
        <div className ='container'>
            <h2>Some Of My Blog  ... <Button onClick={handleTouch} className='btn-success'>Get in touch  <FontAwesomeIcon className='ml-3' icon={faArrowAltCircleRight}></FontAwesomeIcon> </Button></h2>
            <div data-aos="zoom-in" className="blogContainer my-5">
                        <div className='status'>
                            <img style={{height:"250px",width:"100%"}} className="card-img-top" src={ReactRoute} alt="Card image cap"/>
                            <div className="">
                                <h5 className="">Cool Thing React Router</h5>
                                <p className="">React Router DOM, allows you to create routes really easily, and provides other helper functions and tools to allow users to navigate through your React app.</p>
                                <button className="btn btn-success w-100">React Route</button>
                            </div>

                        </div>
                        <div className='status'>
                            <img style={{height:"250px",width:"100%"}} className="card-img-top " src={Js} alt="Card image cap"/>
                            <div className="">
                                <h5 className=""> Javascript </h5>
                                <p className="">JavaScript is the Programming Language for the Web.
                                JavaScript can update and change both HTML and CSS.JavaScript can calculate, manipulate and validate data..</p>
                                <button className="btn btn-success w-100">Javascript</button>
                            </div>
                            
                    </div>
                    <div className='status'>
                        <img style={{height:"250px",width:"100%"}} className="card-img-top" src={ReactOr} alt="Card image cap"/>
                        <div className="">
                            <h5 className="">React Or Not To React</h5>
                            <p className="">React is an open-source JavaScript library <br/> used for building fast and responsive user interfaces. React develops a 
                            web page as a single page application.....</p>
                            <button className="btn btn-success w-100">React Or Not To React</button>
                        </div>
                        
                    </div>
                </div>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default AllBlog;