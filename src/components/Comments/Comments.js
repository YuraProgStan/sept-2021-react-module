import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getAllCommentsThunk} from "../../store";

import css from './Comments.module.css'
import {Comment} from "../Comment/Comment";

const Comments = () => {
    const {comments} = useSelector(state => state['commentReducer']);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCommentsThunk())
    }, [])
    return (
        <div className={css.comments}>
            {comments.map(comment =><Comment key = {comment.id} comment = {comment}  />)}
        </div>
    );
};

export {Comments};