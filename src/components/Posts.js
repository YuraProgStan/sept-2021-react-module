import Post from "./Post";

import React, {useEffect, useState} from 'react';

const Posts = () => {
    let [postsList, setPostsList] = useState([]);
    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(arrayPosts => {
                    setPostsList(arrayPosts)
                })
        },
        []);
    return (
            <div className='posts'>
                {postsList.map(value => <Post
                    key={value.id}
                    userId={value.userId}
                    id={value.id}
                    title={value.title}
                    body={value.body}/>
                )}
            </div>
    );
};

export default Posts;