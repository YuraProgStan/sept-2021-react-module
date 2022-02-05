import React from 'react';
import {FC} from 'react';
import {Posts, Users} from "./components";

const App: FC = () => {
    return (
        <div>
            <Users/>
            <hr/>
            <Posts/>
        </div>
    );
};

export default App;