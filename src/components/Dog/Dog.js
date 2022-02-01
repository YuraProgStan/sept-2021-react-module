import React from 'react';
import css from "./Dog.module.css";

const Dog = ({dog:{id, name},dispatch}) => {
    return (
        <>
            <div className={css.wrap}>
                <div>{name}</div>
                <button onClick={() => dispatch({type: 'delDog', payload: {id}})}>Delete</button>
            </div>
        </>
    );
};

export default Dog;