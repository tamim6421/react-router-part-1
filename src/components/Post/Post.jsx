import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const{body,title,id} = post
    const navigate = useNavigate();


    const handelShowDetails = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={{border:"2px solid red", background:'skyBlue', margin:'10px', borderRadius:'10px'}}> 
            <h3> User Id: {id}</h3>
            <h4> {title} </h4>
            <Link to={`/post/${id}`} > Post Details</Link>
            <Link to={`/post/${id}`}> <button> Details</button> </Link>
            <button onClick={handelShowDetails}> click to see Details</button>

        </div>
    );
};

export default Post;