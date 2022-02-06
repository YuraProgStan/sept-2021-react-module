import React, {FC} from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Header: FC = () => {
    return (
        <>
        <div>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'movies/genres'}>Genres</NavLink>
        </div>
            <div>
                <Outlet />
            </div>
        </>
    );
};

export {Header}