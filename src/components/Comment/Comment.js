import React from 'react';

const Comment = ({comments:{postId,id, name, email, body}}) => {
    console.log(name);
    return (
        <div>
            <div>PostId:{postId}</div>
            <div>Id:{id}</div>
            <div>Name:{name}</div>
            <div>Email:{email}</div>
            <div>Body:{body}</div>
        </div>
    );
};

export default Comment;