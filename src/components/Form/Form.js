import React from 'react';
import css from "./Form.module.css";

const Form = ({dispatch}) => {
    const submit = (e) => {
        e.preventDefault();
        if (e.target.cat) {
            dispatch({type: 'addCat', payload: e.target.cat.value})

        } else if (e.target.dog) {
            dispatch({type: 'addDog', payload: e.target.dog.value})
        }
        e.target.reset()
    }
    return (
        <div className={css.header}>
            <div>
                <form onSubmit={submit}>
                    <label>Add Cat: </label><input type="text" name="cat"/>
                    <button>Save</button>
                </form>
            </div>
            <div>
                <form onSubmit={submit}>
                    <label>Add Dog: </label><input type="text" name='dog'/>
                    <button>Save</button>
                </form>
            </div>
        </div>
    );
};

export default Form;