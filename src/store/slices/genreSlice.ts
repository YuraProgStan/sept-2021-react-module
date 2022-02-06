import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMoovie, IMovieDetails} from '../../interfaces';
const initialState = {

}
const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers:{

    }
})
const genreReducer = genreSlice.reducer;
export default  genreReducer;
export const{} =genreSlice.actions