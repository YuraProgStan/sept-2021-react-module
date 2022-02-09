import React from 'react';
import './PokemonComponent.css';
import {Link} from "react-router-dom";


const PokemonComponent = ({item}) => {

    return (
        <div className={'pokemon-card'}>
            {item.name}
            <br />
            <Link to={'pokemon-details'} state={item}>pokemon details</Link>
        </div>
    );
};

export default PokemonComponent;