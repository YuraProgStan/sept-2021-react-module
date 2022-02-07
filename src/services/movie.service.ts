import {axiosService} from './axios.service';
import {axiosImageService} from './axiosImage.service';

import {api_key, imageURL, urls, urlsImage} from '../constants';

import {IMovieDetails, IMoviesList} from '../interfaces';


export const movieService = {
    getAll:(page:number)=> axiosService.get<IMoviesList>(`${urls.moviesList}?api_key=${api_key}&page=${page}`),
    getById:(id:number)=>axiosService.get<IMovieDetails>(`${urls.movie}${id}?api_key=${api_key}`),
    getImage: (urlImage:string, widthImage:string) =>`${imageURL}${widthImage}${urlImage}?api_key=${api_key}`
}
