import React from 'react';
import  {useState} from 'react';
import {useForm} from 'react-hook-form';
import {carService} from '../../services/carService';

const Form = () => {
    const [formError, setFormError] = useState(null);
    const {
register, handleSubmit, watch, formState:{errors}

    } = useForm();
    const submit = (car) => {
        carService.create(car).then(value => console.log(value)).catch(error => {
            setFormError(error.response.data);
        })
    }
    // watch(event => console.log(event));
    return (
        <div>
<form onSubmit = {handleSubmit(submit)}>
    <div><label>Model: <input type='text' defaultValue={''} {...register ('model')} /></label></div>
    {formError.model  && <span>{formError.model.message}</span>}
    <div><label>Price: <input type='text' defaultValue={''} {...register('price')}  /></label></div>
    {formError.price  && <span>{formError.price.message}</span>}
    <div><label>Year: <input type='text' defaultValue={''} {...register('year')} /></label></div>
    {formError.year  && <span>{formError.year.message}</span>}
    <button>Save</button>
</form>
        </div>
    );
};

export default Form;