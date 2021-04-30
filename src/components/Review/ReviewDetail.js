import React from 'react';

const ReviewDetail = (props) => {
    const {name,description,imageURL}=props.review;
    return (
        <div className="hoverNow">
            <img style={{width:"65%" ,height:"200px", borderRadius:"50%"}} className="card-img-top" src={imageURL} alt="Card image cap"/>
            <div className="">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default ReviewDetail;