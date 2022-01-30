import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../store/jsonplace.slice";
import {User} from "../User/User";

const Users = () => {
    const {users,status, error} = useSelector(state => state['jsonplaceReducer']);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    return (
        <div>
            {status ==='pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {users.map(user =><User key = {user.id} user = {user}  />)}
        </div>
    );
};

export {Users};