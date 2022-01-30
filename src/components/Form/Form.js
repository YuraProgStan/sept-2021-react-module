import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {createCar, updateCarThunk,} from "../../store/car.slice";

const Form = () => {
    const {handleSubmit, register, reset, setValue} = useForm();
    const dispatch = useDispatch();
    const {form} = useSelector(state => state['carReducer']);
    const {id, model, price, year} = form;
    useEffect(() => {
        setValue('model', model);
        setValue('price', price);
        setValue('year', year);
    }, [id])
    const submit = (data) => {
        if (id) {
            dispatch(updateCarThunk({form}))
        } else {
            dispatch(createCar({data}));
        }
        reset();
    }
    return (<form onSubmit={handleSubmit(submit)}>
            <label>Model: <input type="text" {...register('model')}/></label>
            <label>Price: <input type="text" {...register('price')}/></label>
            <label>Year: <input type="text" {...register('year')}/></label>
            <button>{id ? 'Update' : 'Create'}</button>
        </form>
    );
};

export {Form};