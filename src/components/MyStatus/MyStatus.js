import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './MyStatus.css';
import { useHistory } from 'react-router';

const MyStatus = () => {
    const history =useHistory();
    const sayHello=()=>{
        history.push('/contact')
    }
    return (
        <div className='container'>
            <div className='myContainer'>
                <div className='sayHelloNow'>
                    <h2>User Satisfaction !</h2>
                    <p>My Main Goal </p>
                </div>
                <div className="sayHelloNow">
                    <h4>What next?</h4>
                    <p>hello,
                        when your need new worker , please contact me .  text massage and i 
                        am try my best  back to your massage reply . I'm willing to work with you . 
                    </p>
                    <button onClick={sayHello} className="btn btn-info"><FontAwesomeIcon icon={faConnectdevelop}></FontAwesomeIcon> Say Hello</button>
            </div>
            </div>
        </div>
    );
};

export default MyStatus;