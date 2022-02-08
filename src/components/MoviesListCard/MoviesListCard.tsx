import React, {FC} from 'react';
import {IMovieResults} from "../../interfaces";
import css from './MoviesListCard.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {Link} from "react-router-dom";
import {StarsRating} from "../StarsRating/StarsRating";
import {urlsImage} from "../../constants";
import {useAppSelector, useGenreNames} from "../../hooks/redux";

const MoviesListCard: FC<{ movie: IMovieResults }> = ({movie}) => {
    const {original_title, popularity, vote_average, poster_path, title, id, genre_ids} = movie;
    const {genresState} = useAppSelector(state => state.genre);
    const genreNamesArr= useGenreNames(genre_ids);


    // let genreNames = [];
    // if (genresState) {
    //     for (const genre_idsElement of genre_ids) {
    //         const index = genresState.genres.findIndex(value => value.id===genre_idsElement);
    //         const name =genresState.genres[index].name
    //        genreNames.push(name);
    //     }
    // }
    return (
        <Link to={`/movies/${id}`} className={css.movie}>
            <div className={css.images}><PosterPreview poster_path={poster_path} title={title} width={urlsImage.w300}/></div>
            <div><h3>{original_title}</h3></div>
            <div>Genres: {genre_ids && genreNamesArr.map(value => <span key={value}>{value}</span>)}</div>
            <StarsRating vote_average={vote_average}/>
        </Link>
    );
};

export {MoviesListCard};