import React from 'react';
import { useLoaderData } from 'react-router-dom';

const About = () => {
    const dataUser = useLoaderData()
    // console.log(dataUser)
    return (
        <div>
            <h2>This is abut sections</h2>
            <h2>Something about you know that</h2>
            <div>
                {
                    dataUser.map(  users => <div key={users.id}>
                            <h3> {users.name} </h3>
                            <h5> {users.email} </h5>
                            <p> {users.phone} </p>
                         </div>)
                }
            </div>
        </div>
    );
};

export default About;