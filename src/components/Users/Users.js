import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {User} from '../User/User';
import css from '../Users/Users.module.css';
import {getAllUsersThunk} from '../../store';

const Users = () => {
    const {users,status, error} = useSelector(state => state['userReducer']);
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