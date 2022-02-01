import React from 'react';
import css from "./Cat.module.css";

const Cat = ({cat:{id, name},dispatch}) => {
    return (
        <>
            <div className={css.wrap}>
                <div>{name}</div>

                <button onClick={() => dispatch({type: 'delCat', payload: {id}})}>Delete</button>
            </div>
        </>
    );
};

export default Cat;