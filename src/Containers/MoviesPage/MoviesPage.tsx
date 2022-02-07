import React from 'react';
import MoviesList from "../../components/MoviesList/MoviesList";
import {Link, Outlet} from "react-router-dom";
import {GenresList} from "../../components";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setPages} from "../../store";

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
                <MoviesList  />
            </div>


        </>
    );
};

export {MoviesPage};