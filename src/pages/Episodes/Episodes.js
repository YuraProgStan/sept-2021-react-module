import React, {useEffect, useState} from 'react';

import {episodeService} from "../../sevices/axios/episode.service";
import Episode from "../../components/Episode/Episode";
import css from './Episodes.module.css'


const Episodes = () => {
    const [episodes, setEpisodes] = useState({});
    const [page, setPage] = useState(null);


    const url = (query) => {
        let str = query;
        let reg = /\d+/g;
        let num = str.match(reg);
        setPage(num[0]);
    }

    useEffect(() => {
        if (!page) {
            episodeService.getAll().then(value => setEpisodes({
                ...value,
                info: value.info,
                results: [...value.results]
            }));

        } else {
            episodeService.getPage(page).then(value => setEpisodes({
                ...value,
                info: value.info,
                results: [...value.results]
            }));
        }
    }, [page]);


    return (
        <div>
            <h2>Episodes</h2>

            {episodes.info &&
            <>
                <button onClick={() => url(episodes.info.prev)}>Prev</button>
                <button onClick={() => url(episodes.info.next)}>Next</button>

                <div>count: {episodes.info.count}</div>
                <div>pages: {episodes.info.pages}</div>
                <div>next: {episodes.info.next}</div>
                <div>prev: {episodes.info.prev}</div>

            </>
            }
            <div className={css.episodes}>{episodes.results && episodes.results.map(value => <Episode key={value.id}
                                                                                                      episodes={value}/>)}</div>

        </div>
    );
};

export default Episodes;