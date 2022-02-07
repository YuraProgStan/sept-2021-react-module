import axios from "axios";
import {imageURL as baseURL} from "../constants";


export const axiosImageService = axios.create({baseURL});