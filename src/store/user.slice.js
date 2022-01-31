import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {userService} from "../services";

export const getAllUsersThunk= createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const users = await userService.getAll();
            return users;


        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        users: [],
        status: null,
        error: null
    },
    reducers:{

    },
    extraReducers:{
            [getAllUsersThunk.pending]: (state, action) => {
                state.status = 'pending';
                state.error = null;
            },
            [getAllUsersThunk.fulfilled]: (state, action) => {
                state.status = 'fulfilled';
                state.users = action.payload
            },
            [getAllUsersThunk.rejected]: (state, action) => {
                state.status = 'rejected';
                state.error = action.payload

            }
    }

    }
)
const userReducer = userSlice.reducer;

export {userReducer}