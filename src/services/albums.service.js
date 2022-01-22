import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const albumsService = {
    getById: (userId) => axiosService.get(`${urls.users}/${userId}/albums`).then(value => value.data)
}