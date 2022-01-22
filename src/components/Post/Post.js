import React from 'react';
import {Link} from "react-router-dom";

import css from './Post.module.css'
const Post = ({post}) => {
    let {title, id} = post
    return (
        <div className={css.postwrap}>
            <div>{title}</div>
            <div><Link to = {id.toString()} state={post}><button>Post Details</button></Link></div>
        </div>
    );
};

export {Post};