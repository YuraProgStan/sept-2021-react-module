import {axiosService} from "./axios.service";

export const mainService = {
    getPhoto: (name) => axiosService.get(name).then(value => value.data)
}