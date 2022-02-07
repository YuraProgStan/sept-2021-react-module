import React, {FC, useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getAllMovies, setMovies} from "../../store";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {IMoviesList} from "../../interfaces";


const MoviesList:FC = () => {
    const {moviesList} = useAppSelector(state=>state.movies)
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(getAllMovies())
    },[]);

    return (

        <div>
            {moviesList &&
            <>
                <div>Page: {moviesList.page}</div>
                <div>Total pages: {moviesList.total_pages}</div>
                <div>Total results: {moviesList.total_results}</div>
                {moviesList.results.map(movie=><MoviesListCard key={movie.id} movie={movie} />)}

            </>
            }

        </div>


    );
};

export default MoviesList;