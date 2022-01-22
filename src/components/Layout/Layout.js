import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import css from './Layout.module.css'

const Layout = () => {

    return (
        <>
            <div className={css.header}>
                <NavLink to={'cat'}>
                    <button>CAT</button>
                </NavLink>
                <NavLink to={'elefant'}>
                    <button>ELEFANT</button>
                </NavLink>
                <NavLink to={'girl'}>
                    <button>GIRL</button>
                </NavLink>
                <NavLink to={'lion'}>
                    <button>LION</button>
                </NavLink>
                <NavLink to={'tiger'}>
                    <button>TIGER</button>
                </NavLink>
                <NavLink to={'car'}>
                    <button>CAR</button>
                </NavLink>
                <NavLink to={'phone'}>
                    <button>MOBILE PHONE</button>
                </NavLink>
            </div>
            <Outlet/>
        </>
    );
};

export default Layout;