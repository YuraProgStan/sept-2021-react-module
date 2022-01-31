import {configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./car.slice";
import {jsonplaceReducer} from "./jsonplace.slice";
import {userReducer} from "./user.slice";
import {postReducer} from "./post.slice";
import {commentReducer} from "./comment.slice";

const store = configureStore({
    reducer: {
        carReducer,
        jsonplaceReducer,
        userReducer,
        postReducer,
        commentReducer
    }
})
export {store};