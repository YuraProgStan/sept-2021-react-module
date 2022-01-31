import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {commentService} from "../services";


export const getAllCommentsThunk = createAsyncThunk(
    'commentSlice/getAllComments',
    async (_, {dispatch}) => {
        try {
            const comments = await commentService.getAll();
            dispatch(getAllComments({comments}));
        } catch (e) {
            console.log(e)
        }
    }
)

const commentSlice = createSlice({
        name: 'commentSlice',
        initialState: {
            comments: [],
        },
        reducers: {
            getAllComments: (state, action) => {
                state.comments = action.payload.comments;
            }
        }

    }
)
const commentReducer = commentSlice.reducer
export const {getAllComments} = commentSlice.actions
export {commentReducer}