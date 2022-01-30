import axios from "axios";
import {base2URL} from "../configs";


export const axios2Service = axios.create({base2URL})