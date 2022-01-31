import {axiosNewService} from "./axiosnew.service";
import {urlsNew} from "../configs";

export const userService = {
    getAll: () => axiosNewService.get(urlsNew.users).then(value => value.data)
}