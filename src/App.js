import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import {CarPage, CatPage, ElefantPage, GirlPage, LionPage, PhonePage, TigerPage} from "./pages";
import css from './App.module.css';
import ContextProvider from "./HOC/Context";


const App = () => {

    return (
        <div className={css.wrapper}>
            <ContextProvider>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route path={'cat'} element={<CatPage/>}/>
                        <Route path={'elefant'} element={<ElefantPage/>}/>
                        <Route path={'girl'} element={<GirlPage/>}/>
                        <Route path={'lion'} element={<LionPage/>}/>
                        <Route path={'tiger'} element={<TigerPage/>}/>
                        <Route path={'car'} element={<CarPage/>}/>
                        <Route path={'phone'} element={<PhonePage/>}/>
                    </Route>
                </Routes>
            </ContextProvider>
        </div>
    );
}

export default App;
