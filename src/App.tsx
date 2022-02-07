import React from 'react';
import {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {GenreBadge, GenresList, Header, MovieInfo} from "./components";
import {MoviesPage, NotFoundPage} from "./Containers";

const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Header/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'movies/:id'} element={<MovieInfo/>}/>

                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;