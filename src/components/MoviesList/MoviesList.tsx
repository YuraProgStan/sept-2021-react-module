import React, {FC, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {getAllMovies, setMovies, setPages} from '../../store';
import {MoviesListCard} from '../MoviesListCard/MoviesListCard';
import css from './MoviesList.module.css'


const MoviesList: FC = () => {
    const {moviesList} = useAppSelector(state => state.movies);
    // const {pages} = useAppSelector(state => state.movies);
    const {page} = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (page) {
            dispatch(getAllMovies({page:+page}));
        }

    }, [page]);

    return (

        <div>
            {moviesList &&page&&
            <>
                <Link to={`/movies/page/${+page - 1}`}>
                    <button disabled={+page <= 1}
                            onClick={() => dispatch(setPages({page:+page - 1}))}>Prev Page
                    </button>
                </Link>
                <Link to={`/movies/page/${+page + 1}`}>
                    <button disabled={+page === moviesList.total_pages}
                            onClick={() => dispatch(setPages({page:+page + 1}))}>Next Page
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