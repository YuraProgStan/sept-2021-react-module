import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    let {name, id} = user
    return (
        <div>
            <Link to = {id.toString()} state ={user}>{name}</Link>
        </div>
    );
};

export {User};