import './App.module.css';
import {Route, Routes} from "react-router-dom";

import Episodes from "./pages/Episodes/Episodes";
import Details from "./pages/Details/Details";
import css from './App.module.css'

const App = () => {
    return (
        <div className={css.container}>
            <Routes>
                <Route>
                    <Route path={"/"} element={<Episodes/>}/>
                    <Route path={"details"} element={<Details/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App;
