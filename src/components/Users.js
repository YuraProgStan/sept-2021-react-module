import User from "./User";

import React, {useEffect, useState} from 'react';

const Users = () => {
    let [usersList, setUsersList] = useState([]);
    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(arrayUsers => {
                    setUsersList(arrayUsers)
                })
        },
        []);
    return (
            <div className='users'>
                {usersList.map(value => <User
                    key={value.id}
                    id={value.id}
                    name={value.name}
                    username={value.username}/>)}
            </div>
    );
};

export default Users;