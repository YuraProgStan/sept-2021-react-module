import {axiosNewService} from "./axiosnew.service";
import {urlsNew} from "../configs";

export const postService = {
    getAll: () => axiosNewService.get(urlsNew.posts).then(value => value.data)
}