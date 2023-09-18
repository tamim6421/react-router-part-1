import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Contact from '../Contact/Contact';
import Post from '../Post/Post';
import './Post.css'


const Posts = () => {
    const posts = useLoaderData()
    // console.log(posts)
    return (
        <div>
            <h1> Post :  {posts.length}</h1>
            <div className='posts'>
            {
                posts.map( post => <Post key={post.id} post={post}></Post>)
            }
            </div>
           
        </div>
    );
};

export default Posts;