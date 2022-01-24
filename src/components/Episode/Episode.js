import React from 'react';

const Episode = ({episodes:{id, name, air_date, episode}}) => {

    return (
        <div>
<div>id: {id}</div>
<div>name: {name}</div>
<div>air_date: {air_date}</div>
<div>episode: {episode}</div>
        </div>
    );
};

export default Episode;