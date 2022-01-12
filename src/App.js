import './App.css';
import {useEffect, useState} from "react";
import User from "./components/User";
import Post from "./components/Post";
import Comment from "./components/Comment";

const App = () => {
    let [usersList, setUsersList] = useState([]);
    let [postsList, setPostsList] = useState([]);
    let [commentsList, setCommentsList] = useState([]);
    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(arrayUsers => {
                    setUsersList(arrayUsers)
                })
        },
        []);
    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(arrayPosts => {
                    setPostsList(arrayPosts)
                })
        },
        []);
    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.json())
                .then(arrayComments => {
                    setCommentsList(arrayComments)
                })
        },
        []);

    return (

        <div className="App">
            <div className='wrap'>
                <div className='users'>
                    {usersList.map(value => <User
                        key={value.id}
                        id={value.id}
                        name={value.name}
                        username={value.username}/>)}
                </div>
                <div className='posts'>
                    {postsList.map(value => <Post
                        key={value.id}
                        userId={value.userId}
                        id={value.id}
                        title={value.title}
                        body={value.body}/>
                    )}
                </div>
            </div>
            <div className='comments'>
                {commentsList.map(value => <Comment
                    key={value.id}
                    postId={value.postId}
                    id={value.id}
                    name={value.name}
                    email={value.email}
                    body={value.body}

                />)}
            </div>
        </div>


    );
}
export default App;