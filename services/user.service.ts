import {IUser} from '../interfaces/user.interface';
import axios, {AxiosResponse} from 'axios';

export const userService = (): Promise<AxiosResponse<IUser[]>> =>
    axios.get('https://jsonplaceholder.typicode.com/users')