import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const userPostsService = {
    getById: (postId) => axiosService.get(`${urls.users}/${postId}/posts`).then(value => value.data)
}