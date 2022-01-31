import React from 'react';

const Comment = ({comment:{postId, id, name, email, body}}) => {
    return (
        <div>
            <div>PostId: {postId}</div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {Comment};