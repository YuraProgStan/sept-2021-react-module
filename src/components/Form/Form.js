import React from 'react';
import {useState} from 'react';

const Form = ({getFilter}) => {
    const [form, setForm] = useState({name: '', username: '', email: ''});
    const formHandler = (e) => {
        const eventData = {...form, [e.target.name]: e.target.value}
        setForm({...form, ...eventData})
        getFilter(eventData)
    }
    return (
        <div>
            <form>
                <label>Name: <input type="text" name={'form.name'} value={form} onChange={formHandler}/></label>
                <label>Username: <input type="text" name={'form.username'} value={form} onChange={formHandler}/></label>
                <label>Email: <input type="text" name={'form.email'} value={form} onChange={formHandler}/></label>
            </form>
        </div>
    );
};

export default Form;