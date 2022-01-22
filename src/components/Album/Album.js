import React from 'react';
import {Link} from "react-router-dom";

import css from './Album.module.css'

const Album = ({albums}) => {
    let {userId, id, title} = albums;
    return (

        <div className={css.album}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
           <Link to={id.toString()} ><button>Photos</button></Link>
        </div>

    );
};

export {Album};