import React from 'react';
import MoviesList from "../../components/MoviesList/MoviesList";
import {Outlet} from "react-router-dom";
import {GenresList} from "../../components";

const MoviesPage = () => {
    return (
        <>
            <div>
                <GenresList/>
            </div>
            <div>
                <Outlet/>
            </div>
            <div>
                <MoviesList/>
            </div>


        </>
    );
};

export {MoviesPage};