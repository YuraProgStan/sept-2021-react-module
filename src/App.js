import {Link, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/home-page/HomePage";
import {UsersPage} from "./pages/users-page/UsersPage";
import {CommentsPage} from "./pages/comments-page/CommentsPage";
import {PostsPage} from "./pages/posts-page/PostsPage";

function App() {



  return (
      <div>
        <ul>
          <li><Link to={'/'}>home page</Link></li>
          <li><Link to={'/users'}>users page</Link></li>
          <li><Link to={'/posts'}>posts page</Link></li>
          <li><Link to={'/comments'}>comments page</Link></li>
        </ul>

        <Routes>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path={'/users'} element={<UsersPage/>}/>
          <Route path={'/posts'} element={<PostsPage/>}/>
          <Route path={'/comments'} element={<CommentsPage/>}/>
        </Routes>

      </div>
  );
}

export default App;