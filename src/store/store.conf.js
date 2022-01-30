import {configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./car.slice";
import {jsonplaceReducer} from "./jsonplace.slice";

const store = configureStore({
    reducer: {
        carReducer,
        jsonplaceReducer
    }
})
export {store};