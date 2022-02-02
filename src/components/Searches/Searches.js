import React from 'react';
import {useSelector} from 'react-redux';

import Search from '../Search/Search';
import css from  './Searches.module.css'

const Searches = () => {
   const {searches} = useSelector(state => state['formReducer']);
    return (
        <div className={css.main}>
            {searches && searches.map(item=> <Search key ={item.id} item={item} />)}
        </div>
    );
};

export default Searches;