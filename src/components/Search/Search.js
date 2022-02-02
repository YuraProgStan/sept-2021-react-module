import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import css from './Search.module.css'
import {changeCheck, delSearch} from "../../store/form.slice";


const Search = ({item}) => {
    const dispatch = useDispatch();
    const {searches} = useSelector(state => state['formReducer']);
    const singleSearch = searches.filter(value => value.id === item.id);
    const checked = singleSearch[0].checked;

    const {search} = item
    const submit = (e) => {
        e.preventDefault();
        dispatch(delSearch(item.id))
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input type="checkbox"
                       defaultChecked={false}
                       onChange={() => {
                           dispatch(changeCheck(item.id))
                       }}
                />
                {checked
                    ? <label className={css.check}>{search}</label>
                    : <label className={css.uncheck}>{search}</label>
                }
                <button>Delete</button>
            </form>
        </div>
    );
};

export default Search;