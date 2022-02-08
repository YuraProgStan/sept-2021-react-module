import React, {FC} from 'react';
import {movieService} from "../../services";

const PosterPreview: FC<{ poster_path: string, title: string,width:string }> = ({poster_path, title,width}) => {

const urlPoster:string = movieService.getImage(poster_path,width);
    return (
        <div>
            <img alt={title} src={urlPoster}/>
        </div>
    );
};

export {PosterPreview};