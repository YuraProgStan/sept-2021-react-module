import React, {FC, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {getMovieById} from '../../store';
import {PosterPreview} from '../PosterPreview/PosterPreview';
import {urlsImage} from '../../constants';
import css from './MovieInfo.module.css';
import {StarsRating} from '../StarsRating/StarsRating';


const MovieInfo: FC = () => {
    const {id} = useParams<string>();
    const {movieDetails} = useAppSelector(state => state.movies);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getMovieById({id: Number(id)}));

    }, [])

    return (
        <div>
            {movieDetails &&
            <div className={css.movieinfo}>
                <PosterPreview poster_path={movieDetails.poster_path} title={movieDetails.title}
                               width={urlsImage.w780}/>
                <div className={css.description}>
                    <div><h1>{movieDetails.title}</h1></div>
                    <div><p>{movieDetails.overview}</p></div>
                    <div>{movieDetails.adult ? "For adult" : 'For all adults'}</div>
                    <div>Original language: {movieDetails.original_language}</div>
                    <div>Release date: {movieDetails.release_date}</div>
                    <div>Runtime: {movieDetails.runtime}</div>
                    <div>Genres: {movieDetails.genres.map(value => <span key={value.id}>{value.name}</span>)}</div>
                    <StarsRating vote_average={movieDetails.vote_average}/>

                </div>
            </div>}
        </div>
    );
};

export {MovieInfo};