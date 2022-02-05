// import {AxiosResponse} from "axios";

import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IUser} from "../../interfaces";

export const userService = {
    // getAll:():Promise<AxiosResponse<IUser[]>> => axiosService.get(urls.users)
    getAll:()=>axiosService.get<IUser[]>(urls.users)
}