import { faArrowAltCircleRight, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Js from '../../Img/js.png'
import ReactOr from '../../Img/reactOr.png';
import ReactRoute from '../../Img/router.png';
import './Blog.css';

const Blog = () => {
    const history=useHistory();
    const handleTouch=()=>{
        history.push('/blog');
    };
    const goHome=()=>{
        history.push('/');
    };
    return (
        <div className ='container py-5'>
            <h2>Some Of My Article  ... <Button onClick={handleTouch} className='btn-success'>All Article <FontAwesomeIcon className='ml-3' icon={faArrowAltCircleRight}></FontAwesomeIcon> </Button></h2>
            <div className="card-group">
                <div className="card m-3">
                    <div>
                        <img style={{height:"250px",width:"100%"}} className="card-img-top" src={ReactRoute} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Cool Thing React Router</h5>
                            <p className="card-text">React Router DOM, allows you to create routes really easily, and provides other helper functions and tools to allow users to navigate through your React app.</p>
                        </div>
                        <div className="card-footer text-center bg-dark">
                            <small className="text-muted  ">React Router</small>
                        </div>
                    </div>
                </div>
                <div className="card m-3">
                    <div>
                        <img style={{height:"250px",width:"100%"}} className="card-img-top " src={Js} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title"> Javascript </h5>
                            <p className="card-text">JavaScript is the Programming Language for the Web.
                            JavaScript can update and change both HTML and CSS.JavaScript can calculate, manipulate and validate data..</p>
                        </div>
                        <div className="card-footer text-center bg-dark">
                            <small className="text-muted">Javascript</small>
                        </div>
                    </div>
                </div>
                <div className="card m-3">
                    <div>
                        <img style={{height:"250px",width:"100%"}} className="card-img-top" src={ReactOr} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">React Or Not To React</h5>
                            <p className="card-text">React is an open-source JavaScript library used for building fast and responsive user interfaces. React develops a 
                            web page as a single page application</p>
                        </div>
                        <div className="card-footer text-center bg-dark">
                            <small class="text-muted">React Or Not React </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;