import React from 'react';

const UserPost = ({userPost:{userId, id, title, body}}) => {

    return (
        <div>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {UserPost};