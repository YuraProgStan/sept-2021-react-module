import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {usersService} from "../../services/users.service";
import css from "../UsersPage/UsersPage.module.css";
import {User} from "../../components";

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
           <div className={css.columnleft}>{users.map(value =><User key = {value.id} user = {value} />)}</div>
            <div className={css.columnright}><Outlet/></div>
            </div>
        </>
    );
};

export {UsersPage};