import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import UserDetails from "./components/UserDetails/UserDetails";
import PostDetails from "./components/PostDetails/PostDetails";
import Comments from "./components/Comments/Comments";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetails/>}/>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={'comments'} element={<Comments />}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
