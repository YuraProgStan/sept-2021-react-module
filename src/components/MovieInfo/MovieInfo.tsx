import React, {FC, useEffect} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getMovieById} from "../../store";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {urlsImage} from "../../constants";
import css from './MovieInfo.module.css';
import {StarsRating} from "../StarsRating/StarsRating";


const MovieInfo: FC = () => {
    const {id} = useParams();
    const {movieDetails} = useAppSelector(state => state.movies);
    let genres;
    let genreNamesArr;
    // if (movieDetails){
    // {genres} = movieDetails;
    // genreNamesArr= genreNames(genres);
    // }
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getMovieById({id: Number(id)}));

    }, [])
    console.log(movieDetails);

    return (
        <div>
            {movieDetails &&
                <div className={css.movieinfo}>
            <PosterPreview poster_path={movieDetails.poster_path} title={movieDetails.title} width={urlsImage.w780}/>
                    <div className={css.description}>
                    <div><h1>{movieDetails.title}</h1></div>
                    <div>{movieDetails.overview}</div>
                        {/*<div>Genres: {state.map(value => <span key={value}>{value}</span>)}</div>*/}
                        <StarsRating vote_average={movieDetails.vote_average}/>

                    </div>
                </div>}
        </div>
    );
};

export {MovieInfo};