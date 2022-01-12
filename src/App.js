import './App.css';

import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

const App = () => {


    return (

        <div className="App">
            <div className='wrap'>
                <Users/>
                <Posts/>
            </div>
            <Comments/>
        </div>


    );
}
export default App;