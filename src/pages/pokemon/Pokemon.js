import './Pokemon.css';
import {useLocation} from "react-router-dom";
import {useEffect, useReducer, useState} from "react";
import {axiosInstanceClear, getPokemon} from "../../services";

function reducer(state, action) {

    switch (action.type) {
        case 'LOAD_POKEMON' :

            return {...state, pokemon: action.payload};
        case 'LOAD_POKEMON_FORM':
            return {...state, pokemonForm: action.payload}
        default:
            return state;
    }
}

const Pokemon = () => {
    let {state: {name, url}} = useLocation();

    // let [pokemon, setPokemon] = useState({});
    // let [pokemonForm, setPokemonForm] = useState({});
    //
    // useEffect(() => {
    //     getPokemon(url).then(value => {
    //         let {data, data: {forms}} = value;
    //         setPokemon({data});
    //
    //         let {url} = forms[0];
    //
    //         axiosInstanceClear(url).then(response => {
    //             setPokemonForm({...response.data})
    //         });
    //
    //
    //     });
    // }, [url]);


    let [state, dispatch] = useReducer(reducer, {pokemon: {}, pokemonForm: {}});
    let {pokemon, pokemonForm} = state;

    useEffect(() => {
        getPokemon(url).then(({data, data: {forms}}) => {
            dispatch({type: 'LOAD_POKEMON', payload: data});
            let {url} = forms[0];
            axiosInstanceClear(url).then(({data}) => {
                dispatch({type: 'LOAD_POKEMON_FORM', payload: data});
            })
        });

    }, [url]);


    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img style={{width: 150}} src={pokemonForm.sprites?.front_default} alt=""/>

        </div>
    );
}

export default Pokemon;