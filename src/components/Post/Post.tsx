import React, {FC} from 'react';
import {IPost} from "../../interfaces";


const Post: FC<{post:IPost}> = ({post: {id, userId, title, body}}) => {
    return (
        <div>
            <div>Id: {id}</div>
            <div>UserId: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {Post};