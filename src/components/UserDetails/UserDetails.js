import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {usersService} from "../../services/users.service";

const UserDetails = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();
    useEffect(() => {
        if(state){
            setUser(state);
            return;
        }
        usersService.getById(id).then(value => setUser({...value}))
        },
        [id]
    )
    return (
        <div>
            UserDetails
            {user && (
                <div>
                    <div>Id: {user.id}</div>
                    <div>Name: {user.name}</div>
                    <div>UserName: {user.username}</div>
                    <div>Email: {user.email}</div>
                </div>
            )}
        </div>
    );
};

export default UserDetails;