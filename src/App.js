import './App.module.css';
import {Route, Routes} from "react-router-dom";
import Episodes from "./pages/Episodes/Episodes";
import Layout from "./components/Layout/Layout";
import Details from "./pages/Details/Details";
import Episode from "./components/Episode/Episode";
import css from './App.module.css'

const App = () => {
    return (
        <div className={css.container}>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"/"} element={<Episodes />} />
                        {/*<Route path={"details"} element={<Details />} />*/}

                </Route>
            </Routes>
        </div>
    );
}

export default App;
