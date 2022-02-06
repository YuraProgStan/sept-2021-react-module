import {axiosService} from "./axios.service";
import {IGenres} from "../interfaces";

export const genreService = {
    getAll: ()=>axiosService.get<IGenres>('urls.genresList')
}