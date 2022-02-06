import React, {FC} from 'react';
import {IMoovie} from "../../interfaces";

const MoviesListCard: FC<{ movie: IMoovie }> = ({movie}) => {
    const {original_title, overview} = movie;
    return (
        <div>
            <div>{original_title}</div>
            <div>{overview}</div>
        </div>
    );
};

export {MoviesListCard};