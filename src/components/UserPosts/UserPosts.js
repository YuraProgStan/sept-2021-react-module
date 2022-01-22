import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


import css from './UserPosts.module.css'
import {userPostsService} from "../../services/userposts.service";
import {UserPost} from "../UserPost/UserPost";



const UserPosts = () => {
    const {id} = useParams();

    const [userPosts, setUserPosts] = useState(null);
    useEffect(() => {
        userPostsService.getById(id).then(value => setUserPosts([...value]))

    }, [id])
    return (
        <div className={css.wrap}>
            <h3>User Posts</h3>
            {userPosts && userPosts.map(value => <UserPost key = {value.id} userPost={value} /> )}

        </div>
    );
};
export {UserPosts};