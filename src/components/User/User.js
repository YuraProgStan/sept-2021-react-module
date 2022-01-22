import React from 'react';
import {Link} from "react-router-dom";

import css from './User.module.css'

const User = ({user}) => {
    const {name, id} = user;


    return (
        <div className={css.userwrap}>
            <div>{name}</div>
            <div><Link to = {id.toString()} state ={user}><button>User Details</button></Link></div>
            <div><Link to = {`${id.toString()}/albums`} ><button>Albums</button></Link></div>
        </div>
    );
};

export {User};