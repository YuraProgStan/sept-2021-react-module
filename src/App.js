import {Route, Routes} from "react-router-dom";

import {Albums, Comments, Layout, Photos, PostDetails, UserDetails, UserPosts} from "./components";
import {PostsPage, UsersPage} from "./pages";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<UserPosts />}/>
                        </Route>
                        <Route path={':album_id/albums'} element={<Albums />} >
                            <Route path={':al_id'} element={<Photos />}/>
                        </Route>

                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={'comments'} element={<Comments/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
