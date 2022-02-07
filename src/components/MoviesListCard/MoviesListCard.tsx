import React, {FC} from 'react';
import {IMovieResults} from "../../interfaces";
import css from './MoviesListCard.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {Link} from "react-router-dom";
import {StarsRating} from "../StarsRating/StarsRating";
import {urlsImage} from "../../constants";

const MoviesListCard: FC<{ movie: IMovieResults }> = ({movie}) => {
    const {original_title, popularity, vote_average, poster_path, title, id} = movie;

    return (
        <Link to={`/movies/${id}`} className={css.movie}>
            <PosterPreview poster_path={poster_path} title={title} width={urlsImage.w300}/>
            <div>Title: {original_title}</div>
            <div>Popularity: {popularity}</div>
            <div>Vote_average: {vote_average}</div>
            <StarsRating vote_average={vote_average}/>
        </Link>
    );
};

export {MoviesListCard};