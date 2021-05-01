import React from 'react';

const ReviewDetail = (props) => {
    const {name,description,imageURL}=props.review;
    return (
        <div className="hoverNow text-center">
            <img style={{width:"50%" ,height:"150px", borderRadius:"50%"}}  src={imageURL} alt="Card image cap"/>
            <div className="">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default ReviewDetail;