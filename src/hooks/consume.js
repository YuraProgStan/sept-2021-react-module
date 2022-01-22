import {useContext} from "react";
import {Context} from "../HOC/Context";

export const useConsume = () => useContext (Context);
