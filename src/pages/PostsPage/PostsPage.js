import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import css from './PostsPage.module.css'
import {Post} from "../../components";

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
                <div className={css.columnright}><Outlet/></div>
            </div>
        </>
    );
};

export {PostsPage};