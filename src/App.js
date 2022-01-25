import './App.module.css';
import {Navigate, Route, Routes} from "react-router-dom";

import Episodes from "./pages/Episodes/Episodes";
import Details from "./pages/Details/Details";
import css from './App.module.css'
import Layout from "./components/Layout/Layout";

const App = () => {
    return (
        <div className={css.container}>
            <Routes>
                <Route path = {'/'} element = {<Layout />}>
                    <Route index element={<Navigate to ={'episodes/1'}/>}/>
                    <Route  path={"episodes/:id"} element={<Episodes/>}/>
                    <Route path={"details"} element={<Details/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App;
