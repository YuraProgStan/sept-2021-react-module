import React, {useEffect, useState} from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    // const step = 5;
    // let [pages, setPages] = useState(1);
    // let [begin, setBegin] = useState(0);

    // useEffect(() => {
    //     setPages(pages)
    // }, [pages])

    // const next = () => {
    //     setBegin(begin + step);
    //     pages++;
    //     setPages(pages);
    //
    // }
    // const prev = () => {
    //     setBegin(begin - step);
    //     pages--;
    //     setPages(pages);
    //
    // }
    // const state = {
    //     'begin': begin,
    //     'step': step,
    //     'pages': pages,
    //
    // }

    return (
        <div>
            <h2>Layout</h2>
            {/*<div>*/}
            {/*    <Link to={pages.toString()} state={state}>*/}
            {/*        <button onClick={prev}>Prev</button>*/}
            {/*    </Link>*/}
            {/*    <Link to={pages.toString()} state={state}>*/}
            {/*        <button onClick={next}>Next</button>*/}
            {/*    </Link>*/}
            {/*</div>*/}

            <Outlet/>
        </div>
    );
};

export default Layout;