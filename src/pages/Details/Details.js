import React from 'react';
import {useLocation} from "react-router-dom";
import {v4 as uniqueId} from 'uuid';

import Character from "../../components/Character/Character";
import css from './Details.module.css'

const Details = () => {
    const {state} = useLocation();
console.log(state)
    return (
        <div>
            <h2>Details</h2>
            {state &&
            <div className={css.details}>
                {state.map(value => <Character key={uniqueId()} characters={value}/>)}
            </div>}
        </div>
    );
};

export default Details;