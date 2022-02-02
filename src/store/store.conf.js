import {configureStore} from "@reduxjs/toolkit";
import formReducer from "./form.slice";

const store = configureStore({
    reducer:{
        formReducer
    }
})
export default store;
