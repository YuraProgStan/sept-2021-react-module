import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import Post from "../../components/Post/Post";
import css from './PostsPage.module.css'

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
            postsService.getAll().then(value => setPosts([...value]))
        },

        [])
    return (
        <>
            <h1>Posts</h1>
            <div className={css.wrap}>
                <div>{posts.map(value => <Post key={value.id} post={value}/>)}</div>
                <div><Outlet/></div>
            </div>
        </>
    );
};

export default PostsPage;