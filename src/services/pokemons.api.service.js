import {axiosInstance, axiosInstanceClear} from './api.service';


/*export const getPokemons = () => axiosInstance.get('/pokemon',{ params: {
        limit: '25'}
});*/ //если limit задавать только в этом запросе
export const getPokemons = () => axiosInstance.get('/pokemon');

export const getPokemon = (url) => {
    return axiosInstanceClear.get(url)
}