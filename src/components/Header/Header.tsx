import React, {FC} from 'react';
import {NavLink, Outlet, useNavigate} from 'react-router-dom';

import css from './Header.module.css';
import {UserInfo} from '../../components';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';


const Header: FC = () => {
const {thems}=useAppSelector(state=> state.them);
const dispatch = useAppDispatch()

    return (
        <div className={css.container}>
            <div className={thems==='light'?css.wrap:css.wrapdarked}>
                <div className={css.header}>
                    <UserInfo/>
                    <NavLink to={'movies/page/1'}>
                        <button>Movies</button>
                    </NavLink>

                </div>
                <div className={css.main}><Outlet/></div>
            </div>
        </div>
    );
};

export {Header}