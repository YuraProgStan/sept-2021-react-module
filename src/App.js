import {useState} from "react";

import css from './App.module.css';
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
// import {postService} from './services/postService';



const App = () => {
    const [user, setUser] = useState(null);
    // const [posts, setPosts] = useState([]);
    const [userId, setUserId] = useState(null);


    const getUser = (user) => {
        setUser(user)
        // setPosts([])
        setUserId(null)
    }

    const getUserId = (id) => {
        // postService.getByUserId(id).then(value => setPosts([...value]))
       setUserId(id)
    }

    return (
        <div className={css.main}>
            <div className={css.wrap}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId} />}
            </div>
            {/*{!!posts.length && <Posts posts={posts} />}*/}
            {userId && <Posts userId={userId} />}
        </div>
    );
}

export default App;
