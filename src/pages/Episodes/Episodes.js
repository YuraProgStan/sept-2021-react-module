import React, {useEffect, useState} from 'react';
import {episodeService} from "../../sevices/axios/episode.service";
import Episode from "../../components/Episode/Episode";


const Episodes = () => {
    const [episodes, setEpisodes] = useState({});

    // const {state} = useLocation();
    // const {begin, step} = state;
   useEffect(() => {
       episodeService.getAll().then(value => setEpisodes({...value, info: value.info, results: [...value.results]}));
   }, []);
console.log(episodes.info.count);
    return (
        <div>
            <h2>Episodes</h2>
            <div>
                {/*{episodes.info.count}*/}
                {/*<div>{episodes.info}</div>*/}
                {/*<div>{episodes.info.pages}</div>*/}
                {/*<div>{episodes.info.next}</div>*/}
                {/*<div>{episodes.info.prev}</div>*/}
                {/*<Link to={pages.toString()} state={state}>*/}
                {/*    <button onClick={prev}>Prev</button>*/}
                {/*</Link>*/}
                {/*<Link to={pages.toString()} state={state}>*/}
                {/*    <button onClick={next}>Next</button>*/}
                {/*</Link>*/}
            </div>
        </div>
    );
};

export default Episodes;