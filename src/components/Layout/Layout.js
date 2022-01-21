import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './Layout.module.css'

const Layout = () => {
    return (
        <>
        <div className={css.header}>
           <NavLink to={'users'}>Users</NavLink>
           <NavLink to={'posts'}>Posts</NavLink>
        </div>
            <div className={css.main}>
                <Outlet />
            </div>
        </>
    );
};

export default Layout;