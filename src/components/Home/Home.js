import React from 'react';
import "./Home.css";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Project from '../Project/Project';
const Home = () => {
    return (
        <section>
        <div className='container statusContainer'>
            <Header></Header>
            <Services></Services>
        </div>
            <Project></Project>
            <Footer></Footer>
        </section>
    );
};

export default Home;