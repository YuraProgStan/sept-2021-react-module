import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {userService} from "../services";
import axios from "axios";
import {getAllCars} from "./car.slice";

export const getAllUsers = createAsyncThunk(
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

    },
    extraReducers:{
            [getAllUsers.pending]: (state, action) => {
                state.status = 'pending';
                state.error = null;
            },
            [getAllUsers.fulfilled]: (state, action) => {
                state.status = 'fulfilled';
                state.users = action.payload
            },
            [getAllUsers.rejected]: (state, action) => {
                state.status = 'rejected';
                state.error = action.payload

            }
    }

    }
)
const jsonplaceReducer = jsonplaceSlice.reducer

export {jsonplaceReducer}