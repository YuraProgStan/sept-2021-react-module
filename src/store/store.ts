
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import movieReducer from "./slices/movieSlice";

const rootReducer = combineReducers({
movies:movieReducer
})

export const setupStore = () => configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
