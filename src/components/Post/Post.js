import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    let {title, id} = post
    return (
        <div>
            <Link to = {id.toString()} state={post}>{title}</Link>
        </div>
    );
};

export default Post;