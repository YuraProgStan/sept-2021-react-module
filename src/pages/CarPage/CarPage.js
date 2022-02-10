import React, {useEffect, useState} from 'react';
import {UncachedImage} from "react-uncached-image";

import {useConsume} from "../../hooks/consume";
import baseUrl, {urls} from "../../configs/urls";
import css from "../CatPage/CatPage.module.css";
import axios from "axios";

const CarPage = () => {
    const {image, setImage} = useConsume();
    const [url3, setUrl] = useState(null);
    const getImage3 = async () => {
        const response = await fetch('https://loremflickr.com/800/600/car');
        const imageBlob = await response.blob();
        const reader = new FileReader();
        reader.readAsDataURL(imageBlob);
        reader.onloadend = () => {
            const base64data = reader.result;
            setUrl(base64data);
        };
    };

    const updateImage = () => {
        axios.get('https://loremflickr.com/800/600/car')
            .then(value => value.request.responseURL)
            .then(responseURL => setImage(responseURL));
        getImage3();
    }
    useEffect(() => {
        axios.get('https://loremflickr.com/800/600/car')
            .then(value => value.request.responseURL)
            .then(responseURL => setImage(responseURL))
        updateImage();
    }, [])
    let url = `${baseUrl}${urls.car}`;

    return (
        <div>
            <h2>Car</h2>
            <div className={css.wrap}>
                <div><UncachedImage src={url}/></div>
                <div><img alt={'car'} src={image}/></div>
                <div><img alt={'car'} src={url3}/></div>
                <div>
                    <button onClick={() => updateImage()}>Update</button>
                </div>
            </div>
        </div>
    );
};

export {CarPage};