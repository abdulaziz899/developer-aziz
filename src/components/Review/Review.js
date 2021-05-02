import React, { useEffect, useState } from 'react';
import ReviewDetail from './ReviewDetail';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Review = () => {
    AOS.init(
        {duration:500,offset: 300,}
        )
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('https://fathomless-brushlands-27240.herokuapp.com/showReview')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setReviews(data)
        })
    },[])
    return (
        <div className='container'>
            <h1 className='text-center text-success py-5'>User Testimonial </h1>
            <div data-aos="fade-right"  class="reviewContainers">
                {
                    reviews.map(review=><ReviewDetail key={review._id} review={review}></ReviewDetail>)
                }
            </div>
        </div>
    );
};

export default Review;