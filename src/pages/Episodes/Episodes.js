import React, {useEffect, useState} from 'react';

import {episodeService} from "../../sevices/axios/episode.service";
import Episode from "../../components/Episode/Episode";
import css from './Episodes.module.css'
import {Link, useParams} from "react-router-dom";


const Episodes = () => {
    const [episodes, setEpisodes] = useState({});
const {id} = useParams ();


    useEffect(() => {
            episodeService.getPage(id).then(value => setEpisodes({
                ...value,
                info: value.info,
                results: [...value.results]
            }));
    }, [id]);


    return (
        <div>
            <h2>Episodes</h2>

            {episodes.info &&
            <>
               <Link to = {`/episodes/${+id -1}`}> <button disabled={!episodes.info.prev}>Prev</button></Link>
                <Link to = {`/episodes/${+id +1}`}> <button disabled={!episodes.info.next}>Next</button></Link>

                <div>count: {episodes.info.count}</div>
                <div>pages: {episodes.info.pages}</div>
                <div>next: {episodes.info.next}</div>
                <div>prev: {episodes.info.prev}</div>

            </>
            }
            {episodes.results &&
            <div className={css.episodes}>{episodes.results.map(
                value => <Episode key={value.id} episodes={value}/>)}
            </div>}

        </div>
    );
};

export default Episodes;