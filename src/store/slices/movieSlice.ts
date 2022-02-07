import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMoviesList, IMovieDetails} from '../../interfaces';
import {movieService} from "../../services/movie.service";

interface IMovieState {
    moviesList: IMoviesList | null,
    movieDetails:IMovieDetails | null
}
const initialState: IMovieState = {
    moviesList:null,
    movieDetails:null
}

export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (_,{dispatch}) => {
        const {data} = await  movieService.getAll();
        dispatch(setMovies({moviesList: data}))
    }
)
export const getMovieById = createAsyncThunk<void,{id:number}>(
    'moveSlice/getMovieById',
    async ({id},{dispatch})=>{
        const {data} = await movieService.getById(id);
        dispatch(setMovieDetails({movieDetails: data}))

    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{
        setMovies: (state, action: PayloadAction<{moviesList: IMoviesList}>)=>{
            state.moviesList=action.payload.moviesList;
        },
        setMovieDetails:(state, action:PayloadAction<{movieDetails: IMovieDetails}>)=>{
            state.movieDetails=action.payload.movieDetails;
        }
    }
})

const movieReducer = movieSlice.reducer;
export default  movieReducer;
export const{setMovies, setMovieDetails} = movieSlice.actions