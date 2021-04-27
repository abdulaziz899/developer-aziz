import React from 'react';
import "./Home.css";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Project from '../Project/Project';
import Blog from '../Blog/Blog';
import MyStatus from '../MyStatus/MyStatus';
import Review from '../Review/Review';
const Home = () => {
    return (
        <section>
        <div className='container statusContainer'>
            <Header></Header>
            <Services></Services>
        </div>
            <Project></Project>
            <Blog></Blog>
            <MyStatus></MyStatus>
            <Review></Review>
            <Footer></Footer>
        </section>
    );
};

export default Home;