import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
   const {email, id, name, phone} = user
    return (
        <div style={{border:"2px solid red", background:'skyBlue', margin:'10px', borderRadius:'10px'}}>
             <h3> {name} </h3>
            <h3> {email} </h3>
            <p> {phone} </p>
            <Link to={`/user/${id}`}>User Details</Link>
            <Link to={`/user/${id}`}> <button> details</button> </Link>
        </div>
    );
};

export default User;