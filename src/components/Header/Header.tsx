import React, {FC} from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import css from './Header.module.css';

const Header: FC = () => {
    return (
        <>
        <div className={css.header}>
            <NavLink to={'movies'}><button>Movies</button></NavLink>
            <NavLink to={'movies/genres'}><button>Genres</button></NavLink>
        </div>
            <div>
                <Outlet />
            </div>
        </>
    );
};

export {Header}