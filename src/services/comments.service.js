import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const commentsService = {
    getById: (postId) => axiosService.get(`${urls.posts}/${postId}/comments`).then(value => value.data)
}