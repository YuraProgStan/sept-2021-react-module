import {urls2} from "../configs";
import {axios2Service} from "./axios2.service";

export const userService = {
    getAll: () => axios2Service.get(urls2.users).then(value => value.data)
}