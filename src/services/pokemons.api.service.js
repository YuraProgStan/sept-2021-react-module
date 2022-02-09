import {axiosInstance} from './api.service';

export const getPokemons = () => axiosInstance.get('/pokemon');