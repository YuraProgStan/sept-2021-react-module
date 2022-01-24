import React, {useEffect, useState} from 'react';
import { v4 as uniqueId } from 'uuid';
import {Outlet, useLocation} from "react-router-dom";
import {episodeService} from "../../sevices/axios/episode.service";
import Episode from "../../components/Episode/Episode";


const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const {state} = useLocation();
    const {begin, end, pages} = state;
console.log('begin');
   useEffect(() => {
       episodeService.getAll().then(value => setEpisodes([...value.results]));
   }, [begin, end, pages]);

    return (
        <div>
            <h2>Episodes</h2>
            {episodes.slice(begin, end).map(value => <Episode key = {value.id} episodes={value} />)}
        </div>
    );
};

export default Episodes;