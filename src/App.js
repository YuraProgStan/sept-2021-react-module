import './App.css';
import {Cars, Form, Layout} from "./components";
import {Routes, Route} from 'react-router-dom'
import {CarsPage, UsersPage} from "./pages";



const App = () => {

    return (
        <>
            <Routes>
                <Route path = {'/'} element = {<Layout />} >
                 <Route path = {'cars'}  element = {<CarsPage />} />
                 <Route path = {'users'}  element = {<UsersPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
