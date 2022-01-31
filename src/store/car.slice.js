import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {carService} from "../services";

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const cars = await carService.getAll();
            return cars
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carService.create(data);
            dispatch(addCar({data: newCar}))
        } catch (e) {
            console.log(e)
        }
    }
)
export const deleteCarThunk = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCar({id}))
        } catch (e) {
            console.log(e);
        }
    }
)

export const updateCarThunk = createAsyncThunk(
    'carSlice/updateCar',
    async ({data, id}, {rejectWithValue, dispatch}) => {
        try {
            const newCar = await carService.updateById(id, data);
            dispatch(updateCars({newCar}));
            const car = [];
            dispatch(addForm({car}));

        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null,
        form: []
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        addForm: (state, action) => {
            state.form = action.payload.car;
        },
        updateCars: (state, action) => {
            state.cars = state.cars.map(car => {
                    if (car.id === action.payload.newCar.id) {
                         return action.payload.newCar
                    } else {
                        return car
                    }
                }
            );
        }

    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload

        },
        [updateCarThunk.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload

        }
    }
})

const carReducer = carSlice.reducer
export const {addCar, deleteCar, addForm, updateCars} = carSlice.actions;

export {carReducer}