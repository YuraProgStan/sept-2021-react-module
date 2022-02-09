import {Link, Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import Pokemons from './pages/pokemons/Pokemons';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/'}>home</Link>
                </li>
                <li>
                    <Link to = {'/pokemons-page'}>pokemons</Link>
                </li>
            </ul>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={'/pokemons-page'} element={<Pokemons/>}/>
            </Routes>

        </div>
    );
}

export default App;
