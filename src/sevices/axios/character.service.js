import {axiosService} from "./axios.service";

export const characterService = {
    getAll: () => axiosService.get('urls.character').then(value => value.data)

    }