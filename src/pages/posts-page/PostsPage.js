import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export function PostsPage() {

    let {posts, isPostsLoading} = useSelector(state => state.postsReducer);
    let dispatch = useDispatch();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                dispatch({type: 'START_POSTS_LOADING'});
                dispatch({type: 'LOAD_POSTS', payload: value});
                dispatch({type: 'END_POSTS_LOADING'});
            });

    })

    return (
        <div>
            {
                isPostsLoading && <h2>Loading</h2>
            }

        </div>
    );
}