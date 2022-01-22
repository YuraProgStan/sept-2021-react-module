import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {albumsService} from "../../services/albums.service";
import {Album} from "../Album/Album";
import css from './Albums.module.css'

const Albums = () => {
    const {album_id} = useParams();
    const [albums, setAlbums] = useState(null);
    useEffect(() => {
            albumsService.getById(album_id).then(value => setAlbums([...value]))
        },
        [album_id]
    )
    return (
        <>
            <h3>Albums</h3>

            {albums &&
                <>
            <div className={css.albums}>
                {albums.map(value => <Album key = {value.id} albums = {value} />)}
            </div>
                <div>
                    <Outlet />
                </div>
                </>
            }

        </>
    );
};

export {Albums};