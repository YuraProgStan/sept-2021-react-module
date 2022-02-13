import {END_USERS_LOADING, LOAD_USERS, START_USERS_LOADING} from "./user.action";

export const usersReducer = (state = {users: [], isUsersLoading: true}, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return {...state, users: action.payload};
        case START_USERS_LOADING:
            return {...state, isUsersLoading: true}
        case END_USERS_LOADING:
            return {...state, isUsersLoading: false}
    }
    return state;
}