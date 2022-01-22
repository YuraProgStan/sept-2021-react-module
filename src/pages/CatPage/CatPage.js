import React from 'react';
import {UncachedImage} from "react-uncached-image";

import baseUrl, {urls} from "../../configs/urls";
import {useConsume} from "../../hooks/consume";
import css from './CatPage.module.css'

const CatPage = () => {
    const {setImage} = useConsume();
    const updateImage = () => {
        setImage({})
    }
    let url = `${baseUrl}${urls.cat}`;

    return (
        <div>
            <h2>Cat</h2>
            <div className={css.wrap}>
                <div><UncachedImage src={url}/></div>
                <div>
                    <button onClick={() => updateImage()}>Update</button>
                </div>
            </div>
        </div>
    );
};

export {CatPage};