import {configureStore, combineReducers} from "@reduxjs/toolkit";
import movieReducer from "./slices/movieSlice";
import genreReducer from "./slices/genreSlice";

const rootReducer = combineReducers({
    movies: movieReducer,
    genre: genreReducer
})

export const setupStore = () => configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
