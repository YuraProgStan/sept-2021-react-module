import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllUsersThunk} from "../../store/jsonplace.slice";
import {User} from "../User/User";
import css from "../Users/Users.module.css";

const Users = () => {
    const {users,status, error} = useSelector(state => state['jsonplaceReducer']);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsersThunk())
    }, [])
    return (
        <div className={css.users}>
            {status ==='pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {users.map(user =><User key = {user.id} user = {user}  />)}
        </div>
    );
};

export {Users};