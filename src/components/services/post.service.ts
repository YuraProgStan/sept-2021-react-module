import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IPost} from "../../interfaces";

export const postService = {
    getAll: ()=>axiosService.get<IPost[]>(urls.posts)
}