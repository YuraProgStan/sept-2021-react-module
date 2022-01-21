import {Routes, Route, Navigate} from 'react-router-dom';

import Layout from "./componens/Layout/Layout";
import RequireAuth from "./HOC/RequireAuth";
import AuthProvider from "./HOC/AuthProvider";

import {AboutPage, HomePage, LoginPage, NotFoundPage, PostsPage, SinglePostPage, UsersPage} from "./pages";

const App = () => {
    return (
        <AuthProvider>

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={
                        <RequireAuth>
                            <UsersPage/>
                        </RequireAuth>
                    }/>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}/>
                    </Route>

                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'about-us'} element={<Navigate to={'/about'}/>}/>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>

            </Routes>
        </AuthProvider>
    );
}

export default App;
