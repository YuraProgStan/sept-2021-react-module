import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {postsService} from "../../services/posts.service";

const PostDetails = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
     const {state} = useLocation();
    useEffect(() => {
         if (state) {
            setPost(state);
          return
        }
        postsService.getById(id).then(value => setPost({...value}))
    }, [id]);

    return (
        <div>
            PostDetails
            {post && (
                <>
                <div>
                    <div>Id: {post.id}</div>
                    <div>UserId: {post.userId}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                    <Link to={'comments'}><button>Comments</button></Link>
                </div>
                <div>
                    <Outlet />
                </div>
                </>
            )}

        </div>
    );
};

export default PostDetails;