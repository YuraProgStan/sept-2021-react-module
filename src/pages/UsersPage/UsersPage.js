import React, {useEffect, useState} from 'react';
import {usersService} from "../../services/users.service";
import User from "../../components/User/User";
import css from "../UsersPage/UsersPage.module.css";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
            usersService.getAll().then(value =>setUsers([...value]))
        },

        [])
    return (
        <>
            <h1>Users</h1>
            <div className={css.wrap}>
           <div>{users.map(value =><User key = {value.id} user = {value} />)}</div>
            <div><Outlet/></div>
            </div>
        </>
    );
};

export default UsersPage;