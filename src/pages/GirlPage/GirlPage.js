import React from 'react';
import {UncachedImage} from "react-uncached-image";

import baseUrl, {urls} from "../../configs/urls";
import {useConsume} from "../../hooks/consume";
import css from "../CatPage/CatPage.module.css";

const GirlPage = () => {
    const {setImage} = useConsume();
    const updateImage = () => {
        setImage({})
    }
    let url = `${baseUrl}${urls.girl}`;

    return (
        <div>
            <h2>Girl</h2>
            <div className={css.wrap}>
                <div><UncachedImage src={url}/></div>
                <div>
                    <button onClick={() => updateImage()}>Update</button>
                </div>
            </div>
        </div>
    );
};

export {GirlPage};