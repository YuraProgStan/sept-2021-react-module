import React, {FC, useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getAllMovies, setMovies} from "../../store";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

const MoviesList:FC = () => {
    const {moviesList} = useAppSelector(state=>state.movies)
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(getAllMovies())
    },[]);
    const movies = moviesList.results;
    console.log(moviesList);
    return (

        <div>
            { movies.map(movie=><MoviesListCard key={movie.id} movie={movie} />)}
        </div>


    );
};

export default MoviesList;