import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMoovie, IMovieDetails} from '../../interfaces';
import {movieService} from "../../services/movie.service";

interface IMovieState {
    moviesList: IMoovie[],
    movieDetails:IMovieDetails | null
}
const initialState: IMovieState = {
    moviesList:[],
    movieDetails:null
}

export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (_,{dispatch}) => {
        const {data} = await  movieService.getAll();
        dispatch(setMovies({moviesList: data}))
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{
        setMovies: (state, action: PayloadAction<{moviesList: IMoovie[]}>)=>{
            state.moviesList=action.payload.moviesList;
        }
    }
})

const movieReducer = movieSlice.reducer;
export default  movieReducer;
export const{setMovies} = movieSlice.actions