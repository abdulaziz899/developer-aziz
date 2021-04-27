import React from 'react';

const ReviewDetail = (props) => {
    const {name,description,imageURL}=props.review;
    return (
        <div class="card hoverNow">
            <img style={{width:"65%" ,margin:"0px auto",height:"200px", borderRadius:"50%"}} class="card-img-top" src={imageURL} alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{description}</p>
            </div>
        </div>
    );
};

export default ReviewDetail;