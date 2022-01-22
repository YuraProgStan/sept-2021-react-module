import React from 'react';

import css from './Photo.module.css';

const Photo = ({photos}) => {
    const {albumId, id, title, url, thumbnailUrl} = photos;
    return (
        <div className={css.photo}>
            <div>
                <div>albumId: {albumId}</div>
                <div>id: {id}</div>
                <div>title: {title}</div>
                <div>url: {url}</div>
            </div>
            <div>
                <img src={thumbnailUrl} alt={title}/>
            </div>
        </div>
    );
};

export {Photo};