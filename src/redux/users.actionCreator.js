import {END_USERS_LOADING, LOAD_USERS, START_USERS_LOADING} from "./user.action";


export const loadUsers = (payload) => {
    return {type: LOAD_USERS, payload}
}
export const startUsersLoading = () => {
    return {type: START_USERS_LOADING}
}
export const endUsersLoading = () => {
    return {type: END_USERS_LOADING}
}
export const fetchUsers = () => async (dispatch) => {
    let value = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    dispatch(startUsersLoading());
    dispatch(loadUsers(value));
    console.log(value);
    dispatch(endUsersLoading());
}
