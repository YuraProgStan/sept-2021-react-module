import {createSlice} from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'formSlice',
    initialState: {
        searches: []
    },
    reducers: {
        addSearch: (state, action) => {
            state.searches.push({
                id: new Date().getTime(),
                checked: false,
               ...action.payload.data
            })
        },
        delSearch: (state, action) => {
            state.searches = state.searches.filter(search => search.id !== action.payload)
        },
        changeCheck: (state, action) => {
            const index = state.searches.findIndex(search => search.id === action.payload)
           const value = state.searches[index]['checked'];
            state.searches[index]['checked'] = !value;

        }
    }
})

const formReducer = formSlice.reducer;
export const {addSearch, delSearch, changeCheck} = formSlice.actions;

export default formReducer;
