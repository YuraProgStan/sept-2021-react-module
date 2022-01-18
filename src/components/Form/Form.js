import {useState} from "react";


const Form = ({getFilter}) => {
    const [form, setForm] = useState({name: '', username: '', email: ''});

    const formHandler = (e) => {
        const eventData = {...form, [e.target.name]: e.target.value};
        setForm({...eventData});
        // getFilter(eventData)
    }
    return (
        <div>
            <form>
                <label>Name: <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
                <label>Username: <input type="text" name={'username'} value={form.username} onChange={formHandler}/></label>
                <label>Email: <input type="text" name={'email'} value={form.email} onChange={formHandler}/></label>
            </form>
            {<button onClick={() => getFilter(form)}>Find</button>}
        </div>
    );
};

export default Form;