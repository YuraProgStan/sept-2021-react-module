import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getAllGenres} from "../../store";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './GenreList.module.css';

const GenresList:FC = () => {
    const {genresState} = useAppSelector(state=> state.genre)
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(getAllGenres())
    },[]);

    return (
        <div className={css.genrelist}>
            {genresState&&genresState.genres.map(genre=><GenreBadge key={genre.id} genre={genre} />)}
        </div>
    );
};

export {GenresList};