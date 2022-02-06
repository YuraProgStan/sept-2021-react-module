import React from 'react';
import {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {GenreBadge, Header} from "./components";
import {MoviesPage, NotFoundPage} from "./Containers";

const App: FC = () => {
    return (
        <Routes>
          <Route path={'/'} element={<Header />}>
              <Route index element={<Navigate to={'movies'}/>} />
            <Route path={'movies'} element={<MoviesPage />} >
            <Route path={'genres'} element={<GenreBadge />} />
                <Route path={':id'} element={<GenreBadge />} />
            </Route>
              <Route path = {'*'} element = {<NotFoundPage />} />
          </Route>
        </Routes>
    );
};

export default App;