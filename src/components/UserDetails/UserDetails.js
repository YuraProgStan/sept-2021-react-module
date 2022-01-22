import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {usersService} from "../../services/users.service";

const UserDetails = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();
    useEffect(() => {
            if (state) {
                setUser(state);
                return;
            }
            usersService.getById(id).then(value => setUser({...value}))
        },
        [id,state]
    )
    return (
        <>
            <h3>UserDetails</h3>

            {user &&
            <>
                <div>
                    <div>Id: {user.id}</div>
                    <div>Name: {user.name}</div>
                    <div>UserName: {user.username}</div>
                    <div>Email: {user.email}</div>
                    <Link to={'posts'}>
                        <button>Posts</button>
                    </Link>
                </div>
                <div>
                    <Outlet/>
                </div>
            </>
            }

        </>
    );
};

export {UserDetails};