export const postsReducer = (state = {posts: [], isPostsLoading: true}, action) => {
    switch (action.type) {
        case 'LOAD_POSTS':
            return {...state, posts: action.payload};
        case 'START_POSTS_LOADING':
            return {...state, isPostsLoading: true}
        case 'END_POSTS_LOADING':
            return {...state, isPostsLoading: false}
    }
    return state;
}