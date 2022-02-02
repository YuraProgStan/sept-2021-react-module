import React from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';

import {addSearch} from '../../store/form.slice';

import css from './Form.module.css'
const Form = () => {
    const {searches} = useSelector(state => state['formReducer']);
    const all = searches.length;
    let completed = 0;
if(searches.find(value=>value.checked)){
    completed = searches.reduce((sum,el)=>{
            if (el.checked){
                return  sum+1
            }
            else {
                return sum
            }
        },0)
}
    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();
    const submit = (data) => {
        dispatch(addSearch({data}));
        reset()
    }
    return (
        <div className={css.header}>
            <h3>All:{all} Completed:{completed}</h3>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('search')}/>
                <button>Save</button>
            </form>

        </div>
    );
};

export default Form;