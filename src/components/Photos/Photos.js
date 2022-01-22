import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {photosService} from "../../services/photos.service";
import {Photo} from "../Photo/Photo";

const Photos = () => {
    const query = useParams();
    const {al_id} = query;
    const [photos, setPhotos] = useState(null);
    useEffect(() => {
        photosService.getById(al_id).then(value => setPhotos([...value]))
    }, [al_id])
    return (
        <div>
            <h3>Photos</h3>
            {photos && photos.map(value => <Photo key = {value.id} photos={value} />)}

        </div>
    );
};

export {Photos};