import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

export const postService = {
    getByUserId: (id) => axiosService.get(`${urls.posts}?userId=${id}`).then(value => value.data)
    // getByUserId: (id) => fetch(`https://jsonplaceholder.typicode.com${urls.posts}?userId=${id}`).then(value => value.json())
}