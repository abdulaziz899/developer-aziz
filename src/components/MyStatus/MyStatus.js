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
            <div className="sayHelloNow">
                <h4>What next?</h4>
                <p>hello,
                    when your need new worker , please contact me .  text massage and i 
                    am try my best  back to your massage reply . i am agree your team 
                    member . 
                </p>
                <button onClick={sayHello} className="btn btn-info"><FontAwesomeIcon icon={faConnectdevelop}></FontAwesomeIcon> Say Hello</button>
            </div>
        </div>
    );
};

export default MyStatus;