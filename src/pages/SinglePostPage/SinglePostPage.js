import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../services/postService";

const SinglePostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        postService.getById(id).then(value => setPost([...value]))
    }, []);
    console.log(id);
    return (
        <div>
            {post && (
                <div>
                    <div>Id: {post.id}</div>
                    <div>userId: {post.userId}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                </div>
            )}
        </div>
    );
};

export default SinglePostPage;