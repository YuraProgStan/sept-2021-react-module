import {axiosService} from './axios.service';
import {api_key, urls} from '../constants';

import {IMoovie,IMovieDetails} from '../interfaces';

export const movieService = {
    getAll:()=> axiosService.get<IMoovie[]>(`${urls.moviesList}?api_key=${api_key}`),
    getById:(id:number)=>axiosService.get<IMovieDetails>(`${urls.movie}${id}?api_key=${api_key}`)
}
