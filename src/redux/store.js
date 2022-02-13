import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

import {usersReducer} from './users.reducer';
import {postsReducer} from './posts.reducer';

export let reducers = combineReducers({usersReducer, postsReducer});
export let store = createStore(reducers, applyMiddleware(thunk));