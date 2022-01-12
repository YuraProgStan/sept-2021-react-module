import Comment from "./Comment";

import React, {useEffect, useState} from 'react';

const Comments = () => {
    let [commentsList, setCommentsList] = useState([]);
    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.json())
                .then(arrayComments => {
                    setCommentsList(arrayComments)
                })
        },
        []);
    return (
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
    );
};

export default Comments;