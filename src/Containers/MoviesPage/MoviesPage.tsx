import React from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import {GenresList} from '../../components';

const MoviesPage = () => {
    return (
        <div>

                <GenresList/>
                 <MoviesList/>

        </div>
    );
};

export {MoviesPage};