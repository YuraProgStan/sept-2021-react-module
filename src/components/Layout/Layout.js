import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    const step = 5;
    let [pages, setPages] = useState(1);
    let [begin, setBegin] = useState(0)
    let [end, setEnd] = useState(step)
    const next = () => {
        setBegin(begin + step);
        setEnd(end + step);
        setPages(pages);
    }
    const prev = () => {
        if (pages !== 1) {
            setBegin(begin - step);
            setEnd(end - step);
            setPages(pages);
        }
    }
    const state = {
        'begin': begin,
        'end': end,
        'pages': pages
    }
    return (
        <div>
            <div>
                <Link to={(pages--).toString()} state={state}>
                    <button onClick={prev}>Prev</button>
                </Link>
                <Link to={(pages++).toString()} state={state}>
                    <button onClick={next}>Next</button>
                </Link>
            </div>

            <Outlet/>
        </div>
    );
};

export default Layout;