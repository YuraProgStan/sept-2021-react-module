import React from 'react';

const User = ({user:{id, name, username, email}}) => {
    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
        </div>
    );
};

export {User};