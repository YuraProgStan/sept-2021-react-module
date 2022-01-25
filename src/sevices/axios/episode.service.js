import {axiosService} from "./axios.service";
import {urls} from "../../configs/urls";

export const episodeService = {
    getAll: () => axiosService.get(urls.episode).then(value => value.data),
    getPage: (page) =>  axiosService.get(`${urls.episode}?page=${page}`).then(value => value.data)

    }