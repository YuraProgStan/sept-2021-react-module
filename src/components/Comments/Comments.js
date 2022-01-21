import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {commentsService} from "../../services/comments.service";
import Comment from "../Comment/Comment";

const Comments = () => {
    const {id} = useParams();

const [comments, setComments] = useState(null);
useEffect(() => {
commentsService.getById(id).then(value => setComments({...value}))

}, [])
    console.log(comments);
    return (
        <div>
            {comments &&
            comments.map(value => <Comment  key={value.id} comments = {value} />)
            }
        </div>
    );
};

export default Comments;