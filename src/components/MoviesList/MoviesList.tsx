import React, {FC, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {getAllMovies, getAllMoviesWithGenre, setPages} from '../../store';
import {MoviesListCard} from '../MoviesListCard/MoviesListCard';
import css from './MoviesList.module.css'


const MoviesList: FC = () => {
    const {moviesList,pages, genres} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (pages) {
            if (genres) {
                dispatch(getAllMoviesWithGenre({page:pages.toString(),genre:genres}))
            }
            else {
                dispatch(getAllMovies({page:pages.toString()}))
            }
        }

    }, [pages,genres]);

    return (

        <div>
            {moviesList &&pages&&
            <>
                <Link to={`/movies/page/${+pages - 1}`}>
                    <button disabled={+pages <= 1}
                            onClick={() => dispatch(setPages({page:(+pages - 1).toString()}))}>Prev Page
                    </button>
                </Link>
                <Link to={`/movies/page/${+pages + 1}`}>
                    <button disabled={+pages === moviesList.total_pages}
                            onClick={() => dispatch(setPages({page:(+pages + 1).toString()}))}>Next Page
                    </button>
                </Link>
                <div>Page: {moviesList.page}</div>
                <div>Total pages: {moviesList.total_pages}</div>
                <div>Total results: {moviesList.total_results}</div>
                <div className={css.movies}>{moviesList.results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}</div>

            </>
            }

        </div>
    );
};

export default MoviesList;