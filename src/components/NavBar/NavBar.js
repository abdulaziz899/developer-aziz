
import React from 'react';
import './NavBar.css'
import Logo from "../../Img/myL.jpg";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div >
            <nav className ="navbar positionFixed navbar-expand-lg navbar-light bg-primary">
                <div className='headerContainer container logoControls'>
                <a className="navbar-brand" href="#"><img  src={Logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                        <div className="collapse navbarControls  navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav headerControls ">
                                <li className="nav-item active">
                                    <a className="nav-link text-white"><Link className=' headerControlsLink' to='/home'>Home <span className="sr-only">(current)</span></Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" ><Link className=' headerControlsLink' to="/About">About</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" ><Link className=' headerControlsLink' to="/blog">Blog</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" ><Link className=' headerControlsLink' to="/project">Project</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" ><Link className=' headerControlsLink' to="/service">Service</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" ><Link className=' headerControlsLink' to="/contact">Contact</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" ><Link className=' headerControlsLink' to="/review">Review</Link></a>
                                </li>
                            </ul>
                            <a href="https://drive.google.com/file/d/1PPFLl0K73aVhYUQXWsBv_c1yNdnfKYtG/view?usp=sharing" target='_blank'><button className="btn btn-warning ml-2 resumeFixed">Resume</button></a>
                        </div>
                    </div>
                </nav>
        </div>
    );
};

export default NavBar;