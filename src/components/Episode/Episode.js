import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Episode = ({episodes: {id, name, air_date, episode}}) => {

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>air_date: {air_date}</div>
            <div>episode: {episode}</div>
            {/*<Link to = "details"><button>Details</button></Link>*/}
            {/*<Outlet />*/}
        </div>
    );
};

export default Episode;