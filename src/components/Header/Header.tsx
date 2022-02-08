import React, {FC} from 'react';
import {NavLink, Outlet, useNavigate} from 'react-router-dom';
import css from './Header.module.css';
import {UserInfo} from "../UserInfo/UserInfo";

const Header: FC = () => {
    // const navigate = useNavigate();
    return (
        <div className={css.container}>
            <div className={css.wrap}>
                <div className={css.header}>
                    <UserInfo/>
                    <NavLink to={'movies/page/1'}>
                        <button>Movies</button>
                    </NavLink>
                    {/*<button onClick={()=>{navigate(-1)}}>Movies</button>*/}
                </div>
                <div className={css.main}><Outlet/></div>
            </div>
        </div>
    );
};

export {Header}