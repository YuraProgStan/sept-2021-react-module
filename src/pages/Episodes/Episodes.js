import React, {useEffect, useState} from 'react';
import { v4 as uniqueId } from 'uuid';
import {Outlet} from "react-router-dom";
import {episodeService} from "../../sevices/axios/episode.service";
import Episode from "../../components/Episode/Episode";


const Episodes = ({begin, end, pages}) => {

    const [episodes, setEpisodes] = useState([]);
   useEffect(() => {
       episodeService.getAll().then(value => setEpisodes([...value.results]));

   }, [pages])
    return (
        <div>
            <h2>Episodes</h2>
            {episodes.slice(begin, end).map(value => <Episode key = {value.id} episodes={value} />)}
        </div>
    );
};

export default Episodes;