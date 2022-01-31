import axios from "axios";
import {newURL as baseURL} from "../configs";


export const axiosNewService = axios.create({baseURL})