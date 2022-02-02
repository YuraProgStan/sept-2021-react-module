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
        addComp: (state, action) => {
            state.completed = state.completed + 1;
        },
        delComp: (state, action) => {
            state.completed = state.completed - 1;
        },
        changeCheck: (state, action) => {
            const index = state.searches.findIndex(search => search.id === action.payload)
           const value = state.searches[index]['checked'];
            state.searches[index]['checked'] = !value;

        }
    }
})

const formReducer = formSlice.reducer;
export const {addSearch, delSearch, addAll, delAll, addComp, delComp, changeCheck} = formSlice.actions;

export default formReducer;
