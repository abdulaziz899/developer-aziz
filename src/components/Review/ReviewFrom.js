
import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaStar} from "react-icons/fa";
import { Context } from "../../App";
import Contact from "../Contact/Contact";
import './Review.css'


const ReviewFrom = () => {
    const [imageURL,setImageURL]=useState(null);
    const [logInUser,setLogInUser]=useContext(Context);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const reviewDetail={
            name:data.name,
            imageURL:imageURL,
            description:data.description,
        };
        console.log(data);
        console.log(reviewDetail)
        const url=`https://fathomless-brushlands-27240.herokuapp.com/addReview`;
        fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(reviewDetail)
          })
          .then(res=>res.json())
          .then(data=>
           { if(data){
                alert("review add success show home page ")
            }
        }
            )
        
    };


    const handleFileUpload=event=>{
        console.log(event.target.files[0]);
        const imagesData=new FormData();
        imagesData.set('key','bf5c3fadee63cad4bf7827553934803d');
        imagesData.append('image',event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imagesData)
          .then(function (response) {
            console.log(response.data.data.display_url);
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className='mt-5 pt-5'>
            <div className='d-flex justify-content-between w-75 pt-5'>
                    <h1 className='text-success ml-5'>ADD REVIEW NOW </h1>
                    {logInUser.imgUrl&&  <img style={{width:"100px",height:"100px",borderRadius:"50%"}} src={logInUser.imgUrl} alt=""/> }
            </div>
                    <div className='reviewContainer  ml-5'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='form-control' name="name" {...register("name",{ required: true })} placeholder='enter your name' />
                            {errors.name && <span className='text-danger'>This field is required</span>}
                            <textarea name="description" id="" cols="93" rows="5" {...register("description", { required: true })} placeholder='What Your FeedBack'></textarea>
                            {errors.description && <span className='text-danger'>This field is required</span>}
                            <input className='form-control' onChange={handleFileUpload} type="file" name="file" id=""/>
                            <input className='bg-success w-25' type="submit" />
                        </form>
                    </div>
            <Contact></Contact>
        </div>
    );
};

export default ReviewFrom;