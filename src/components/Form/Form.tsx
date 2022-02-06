import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {addCarThunk} from "../../store";

const Form:FC = () => {
    const {handleSubmit, register, reset, setValue} = useForm<ICar>();
    const dispatch = useAppDispatch();

    const submit:SubmitHandler<ICar> = (car) => {
        dispatch(addCarThunk({car}))
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button>Save</button>
        </form>
    );
};

export {Form};