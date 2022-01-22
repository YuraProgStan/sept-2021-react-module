import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const photosService = {
    getById: (albumId) => axiosService.get(`${urls.albums}/${albumId}/photos`).then(value => value.data)
}