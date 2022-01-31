import {axiosNewService} from "./axiosnew.service";

import {urlsNew} from "../configs";


export const commentService = {
    getAll: () => axiosNewService.get(urlsNew.comments).then(value => value.data)
}