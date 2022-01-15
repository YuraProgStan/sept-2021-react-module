import React from 'react';
import {useState, useEffect} from 'react';

import Post from '../Post/Post';
import {postService} from '../../services/postService';


const Posts = (/*{posts}*/{userId}) => {
const [posts, setPosts] = useState([]);
useEffect (() => {
    postService.getByUserId(userId).then(value => setPosts(value))
    },
    [userId])
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}  />)}
        </div>
    );
};

export default Posts;