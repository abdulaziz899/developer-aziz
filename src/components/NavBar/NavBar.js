// import React from 'react';
// import { Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './NavBar.css'
// import Logo from "../../Img/web-log.png";
// const NavBar = () => {
//     return (
//         <div>
//             <Navbar bg="dark" variant="dark ">
//                 <div className=" headerContainer container">
//                     <div className="logoControls">
//                         <Navbar.Brand href="#home">
//                             <img  src={Logo} alt=""/>
//                         </Navbar.Brand>
//                     </div>
//                     <div className="navbarControls">
//                         <Nav className="mr-auto headerControls">
//                             <a><Link to="/home">Home</Link></a>
//                             <a><Link to="/About">About</Link></a>
//                             <a><Link to="/blog">Blog</Link></a>
//                             <a><Link to="/project">Project</Link></a>
//                             <a><Link to="/service">Service</Link></a>
//                             <a><Link to="/contact">Contact</Link></a>
//                             <a><Link to="/review">Review</Link></a>
//                             <a><Link to="/login">Login</Link></a>
//                         </Nav>
//                     </div>
//                 </div>
//             </Navbar>
//         </div>
//     );
// };

// export default NavBar;


import React from 'react';
import './NavBar.css'
import Logo from "../../Img/web-log.png";
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
                            <button className="btn btn-warning ml-2 resumeFixed">Resume</button>
                        </div>
                    </div>
                </nav>
        </div>
    );
};

export default NavBar;