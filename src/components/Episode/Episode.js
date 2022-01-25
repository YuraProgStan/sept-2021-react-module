import React from 'react';
import {Link} from "react-router-dom";

const Episode = ({episodes: {id, name, air_date, episode, characters}}) => {
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>air_date: {air_date}</div>
            <div>episode: {episode}</div>
         <Link to = {'/details'} state = {characters} ><button>Details</button></Link>
        </div>
    );
};

export default Episode;