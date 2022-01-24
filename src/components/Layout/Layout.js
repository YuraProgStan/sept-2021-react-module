import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    let [pages, setPages] = useState(1)
    let begin = 0;
    let end = 10;
    const step = 10;
    const change = () => {
        begin = begin + step;
        end = end + step;
        setPages += 1;
        console.log('work')
    }
    console.log('begin = ', begin)
    return (
        <div>

            <div>
                <button onClick={change}>Next</button>
                <Link to = {'/'}><button>Prev</button></Link>
            </div>

            <Outlet begin = {begin} end = {end} pages = {pages} />
        </div>
    );
};

export default Layout;