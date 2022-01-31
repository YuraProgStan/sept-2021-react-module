import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllPostsThunk} from "../../store/jsonplace.slice";
import {Post} from "../Post/Post";
import css from './Posts.module.css'

const Posts = () => {
    const {posts} = useSelector(state => state['jsonplaceReducer']);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPostsThunk())
    }, [])
    return (
        <div className={css.posts}>
            {posts.map(post =><Post key = {post.id} post = {post}  />)}
        </div>
    );
};

export {Posts};