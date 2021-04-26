import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css'
import Logo from "../../Img/web-log.png";
const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark ">
                <div className=" headerContainer container">
                    <div className="logoControls">
                        <Navbar.Brand href="#home">
                            <img  src={Logo} alt=""/>
                        </Navbar.Brand>
                    </div>
                    <div className="navbarControls">
                        <Nav className="mr-auto headerControls">
                            <a><Link to="/home">Home</Link></a>
                            <a><Link to="/About">About</Link></a>
                            <a><Link to="/blog">Blog</Link></a>
                            <a><Link to="/project">Project</Link></a>
                            <a><Link to="/service">Service</Link></a>
                            <a><Link to="/contact">Contact</Link></a>
                            <a><Link to="/login">Login</Link></a>
                        </Nav>
                    </div>
                </div>
            </Navbar>
        </div>
    );
};

export default NavBar;