import React, {useEffect, useState} from 'react';

import {characterService} from "../../sevices/axios/character.service";


const Character = ({characters}) => {
    let str = characters;
    let reg = /\d+/g;
    let num = str.match(reg);

    const [character, setCharacter] = useState({});
    useEffect(() => {
        characterService.getById(num[0]).then(value => setCharacter({...value}))
    }, []);
    let {id, name, status, species, gender, image} = character
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>status: {status}</div>
            <div>species: {species}</div>
            <div>gender: {gender}</div>
            <div><img src={image} alt={name}/></div>
        </div>
    );
};

export default Character;