import React from 'react';
import {UncachedImage} from "react-uncached-image";

import {useConsume} from "../../hooks/consume";
import baseUrl, {urls} from "../../configs/urls";
import css from "../CatPage/CatPage.module.css";

const CarPage = () => {
    const {setImage} = useConsume();
    const updateImage = () => {
        setImage({})
    }
    let url = `${baseUrl}${urls.car}`;

    return (
        <div>
            <h2>Car</h2>
            <div className={css.wrap}>
                <div><UncachedImage src={url}/></div>
                <div>
                    <button onClick={() => updateImage()}>Update</button>
                </div>
            </div>
        </div>
    );
};

export {CarPage};