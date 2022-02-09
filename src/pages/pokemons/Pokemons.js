import React, {useEffect} from 'react';

import './Pokemons.css'
import {getPokemons} from "../../services";

const Pokemons = () => {
    useEffect(() =>{
        getPokemons().then(value => console.log(value.data))
        },
    [])
    return (
        <div>
            Pokemons
        </div>
    );
};

export default Pokemons;