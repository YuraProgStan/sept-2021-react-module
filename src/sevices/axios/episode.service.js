import {axiosService} from "./axios.service";
import {urls} from "../../configs/urls";

export const episodeService = {
    getAll: () => axiosService.get(urls.episode).then(value => value.data)

    }