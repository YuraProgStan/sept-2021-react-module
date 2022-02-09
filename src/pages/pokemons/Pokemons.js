import React, {useEffect, useState} from 'react';

import './Pokemons.css'
import {getPokemons} from "../../services";
import PokemonComponent from '../../components/pokemon-component/PokemonComponent';
import './Pokemons.css'
import {Outlet} from "react-router-dom";

const Pokemons = () => {
    let [pokemons, setPokemons] = useState([])
    useEffect(() => {
        getPokemons().then(value => {
            // value.data.results
            let {data: {results}} = value;
            setPokemons(results);
        })
    },[]);
    return (
        <div>
            <Outlet/>
            <div className={'pokemons-list'}>
                {
                    pokemons.map(pokemonItem => <PokemonComponent key={pokemonItem.name} item={pokemonItem}/>)
                }
            </div>
        </div>
    );
};

export default Pokemons;