import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {postService, userService} from "../services";
import {commentService} from "../services/comment.service";

export const getAllUsersThunkOld= createAsyncThunk(
    'jsonplaceSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const users = await userService.getAll();
            return users;


        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
export const getAllPostsThunkOld = createAsyncThunk(
    'jsonplaceSlice/getAllPosts',
    async (_, {dispatch}) => {
        try {
            const posts = await postService.getAll();
            dispatch(getAllPosts({posts}));
        } catch (e) {
          console.log(e)
        }
    }
)
export const getAllCommentsThunkOld = createAsyncThunk(
    'jsonplaceSlice/getAllComments',
    async (_, {dispatch}) => {
        try {
            const comments = await commentService.getAll();
            dispatch(getAllComments({comments}));
        } catch (e) {
            console.log(e)
        }
    }
)
const jsonplaceSlice = createSlice({
    name: 'jsonplaceSlice',
    initialState: {
        users: [],
        posts: [],
        comments: [],
        status: null,
        error: null
    },
    reducers:{
        getAllPosts:(state, action) =>{
            state.posts = action.payload.posts;
        },
        getAllComments:(state, action) =>{
            state.comments = action.payload.comments;
        }
    },
    extraReducers:{
            [getAllUsersThunkOld.pending]: (state, action) => {
                state.status = 'pending';
                state.error = null;
            },
            [getAllUsersThunkOld.fulfilled]: (state, action) => {
                state.status = 'fulfilled';
                state.users = action.payload
            },
            [getAllUsersThunkOld.rejected]: (state, action) => {
                state.status = 'rejected';
                state.error = action.payload

            }
    }

    }
)
const jsonplaceReducer = jsonplaceSlice.reducer
export const {getAllPosts, getAllComments} = jsonplaceSlice.actions
export {jsonplaceReducer}