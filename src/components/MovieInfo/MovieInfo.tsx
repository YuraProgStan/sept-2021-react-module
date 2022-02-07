import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getMovieById} from "../../store";

const MovieInfo:FC = () => {
    const {id} = useParams();

    const {movieDetails} = useAppSelector(state=>state.movies);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(getMovieById({id:Number(id)}))
    },[])
    return (
        <div>
<div>{movieDetails && movieDetails.overview}</div>
        </div>
    );
};

export {MovieInfo};