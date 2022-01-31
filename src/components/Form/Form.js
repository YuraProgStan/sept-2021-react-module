import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from 'react-redux';
import {joiResolver} from '@hookform/resolvers/joi';

import {createCar, updateCarThunk} from '../../store';
import {CarValidator} from '../../validator/car.validator';

const Form = () => {
    const {handleSubmit, register, reset, setValue, formState:{errors}} = useForm({resolver: joiResolver(CarValidator), mode: "onTouched"});
    const dispatch = useDispatch();
    const {form} = useSelector(state => state['carReducer']);

    const {id, model, price, year} = form;
    useEffect(() => {
        if(id){
        setValue('model', model);
        setValue('price', price);
        setValue('year', year);
        }
    }, [id])
    const submit = (data) => {
        if (id) {
            dispatch(updateCarThunk({data,id}));
        } else {
            dispatch(createCar({data}));
        }
        reset();
    }
    return (<form onSubmit={handleSubmit(submit)}>
            <label>Model: <input type="text" {...register('model')}/></label>
            {errors.model && <span>{errors.model.message}</span>}
            <label>Price: <input type="text" {...register('price')}/></label>
            {errors.price && <span>{errors.price.message}</span>}
            <label>Year: <input type="text" {...register('year')}/></label>
            {errors.year && <span>{errors.year.message}</span>}
            <button>{id ? 'Update' : 'Create'}</button>
        </form>
    );
};

export {Form};