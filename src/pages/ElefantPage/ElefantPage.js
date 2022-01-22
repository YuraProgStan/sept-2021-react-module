import React from 'react';
import {UncachedImage} from "react-uncached-image";

import baseUrl, {urls} from "../../configs/urls";
import {useConsume} from "../../hooks/consume";
import css from "../ElefantPage/ElefantPage.module.css";

const ElefantPage = () => {
    const {setImage} = useConsume();
    const updateImage = () => {
        setImage({})
    }
    let url =`${baseUrl}${urls.elefant}`;
    return (
        <div>
            <h2>Elefant</h2>
            <div className={css.wrap}>
                <div><UncachedImage src={url}/></div>
                <div>
                    <button onClick={() => updateImage()}>Update</button>
                </div>
            </div>
        </div>
    );
};

export {ElefantPage};