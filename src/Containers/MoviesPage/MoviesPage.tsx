import React from 'react';
import MoviesList from "../../components/MoviesList/MoviesList";
import {Outlet} from "react-router-dom";

const MoviesPage = () => {
    return (
        <>
            <div>
                <MoviesList />
            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
};

export {MoviesPage};