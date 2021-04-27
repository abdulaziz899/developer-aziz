import React, { useEffect, useState } from 'react';
import ReviewDetail from './ReviewDetail';

const Review = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:2000/showReview')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setReviews(data)
        })
    },[])
    return (
        <div className='container'>
            <h1 className='text-center text-success py-5'>User Testimonial </h1>
            <div class="card-deck">
                {
                    reviews.map(review=><ReviewDetail key={review._id} review={review}></ReviewDetail>)
                }
            </div>
        </div>
    );
};

export default Review;