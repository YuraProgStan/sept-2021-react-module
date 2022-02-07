import React, {FC} from 'react';
import {IMovieResults} from "../../interfaces";
import css from './MoviesListCard.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {Link} from "react-router-dom";

const MoviesListCard: FC<{ movie: IMovieResults }> = ({movie}) => {
    const {original_title, popularity, vote_average, poster_path, title,id} = movie;

    return (
        <div className={css.movie}>
            <PosterPreview poster_path = {poster_path} title = {title} />
            <div>Title: <Link to={`${id}`}>{original_title}</Link></div>
            <div>Popularity: {popularity}</div>
            <div>Vote_average: {vote_average}</div>
        </div>
    );
};

export {MoviesListCard};