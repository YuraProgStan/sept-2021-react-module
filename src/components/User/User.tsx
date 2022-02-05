import React, {FC} from 'react';
import {IUser} from "../../interfaces";

export interface IProps {
    user: IUser;
}

const User: FC<IProps> = ({user: {id,name,username,email}}) => {
    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>UserName: {username}</div>
            <div>Email: {email}</div>
        </div>
    );
};

export {User};