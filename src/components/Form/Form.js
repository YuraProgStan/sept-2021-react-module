import React from 'react';
import {useForm} from 'react-hook-form';

const Form = () => {
    const {
register, handleSubmit, watch, formState:{errors}

    } = useForm();
    const submit = (data) => {
        carSevice.create(car).then
    }
    // watch(event => console.log(event));
    return (
        <div>
<form onSubmit = {handleSubmit(submit)}>
    <div><label>Model: <input type='text' defaultValue={''} {...register ('model')} /></label></div>
    <div><label>Price: <input type='text' defaultValue={''} {...register('price')}  /></label></div>
    <div><label>Year: <input type='text' defaultValue={''} {...register('year')} /></label></div>
    <button>Save</button>
</form>
        </div>
    );
};

export default Form;