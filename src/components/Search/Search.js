import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import css from './Search.module.css'
import {changeCheck, delSearch} from "../../store/form.slice";


const Search = ({item}) => {
    const dispatch = useDispatch();

    const {search,checked,id} = item;
    const submit = (e) => {
        e.preventDefault();
        dispatch(delSearch(item.id))
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input type="checkbox"
                       value={checked}
                       onChange={() => {
                           dispatch(changeCheck(id))
                       }}
                />
                <label className={checked?css.check:css.uncheck}>{search}</label>
                <button>Delete</button>
            </form>
        </div>
    );
};

export default Search;