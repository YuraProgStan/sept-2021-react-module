import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import css from './Layout.module.css'

const Layout = () => {
    return (
        <div className={css.container}>
        <div className={css.navbar}>
            <NavLink to={'cars'}><button>Cars</button></NavLink>
            <NavLink to={'users'}><button>Users</button></NavLink>
            <NavLink to={'posts'}><button>Posts</button></NavLink>
            <NavLink to={'comments'}><button>Comments</button></NavLink>

        </div>
        <div>
            <Outlet />
        </div>
        </div>
    );
};

export {Layout};