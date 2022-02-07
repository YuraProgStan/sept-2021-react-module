import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMoviesList, IMovieDetails} from '../../interfaces';
import {movieService} from '../../services/';

interface IMovieState {
    moviesList: IMoviesList | null,
    movieDetails:IMovieDetails | null,
    pages:number,
}
const initialState: IMovieState = {
    moviesList:null,
    movieDetails:null,
    pages:1
}

export const getAllMovies = createAsyncThunk<void, {page:number}>(
    'movieSlice/getAllMovies',
    async ({page},{dispatch}) => {
        const {data} = await  movieService.getAll(page);
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
        },
        setPages:(state, action:PayloadAction<{page:number}>)=>{
            state.pages = action.payload.page;
        }
    }
})

const movieReducer = movieSlice.reducer;
export default  movieReducer;
export const{setMovies, setMovieDetails,setPages} = movieSlice.actions