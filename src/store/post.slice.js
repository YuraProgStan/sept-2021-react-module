import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {postService} from "../services";


export const getAllPostsThunk = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_, {dispatch}) => {
        try {
            const posts = await postService.getAll();
            dispatch(getAllPosts({posts}));
        } catch (e) {
            console.log(e)
        }
    }
)

const postSlice = createSlice({
        name: 'postSlice',
        initialState: {
            posts: [],
        },
        reducers: {
            getAllPosts: (state, action) => {
                state.posts = action.payload.posts;
            }
        }

    }
)
const postReducer = postSlice.reducer
export const {getAllPosts} = postSlice.actions
export {postReducer}