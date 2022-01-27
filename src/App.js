import css from './App.module.css'
import {useReducer} from "react";
import Animal from "./components/Animal";
import {v4 as idUnique} from "uuid";

const reducer = (state, action) => {
    switch (action.type) {
        case 'cat':
            return {...state, cat: [...state.cat, action.payload]}
        case 'dog':
            return {...state, dog: [...state.dog, action.payload]}
        default:
            return state
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, {cat: '', dog: ''});


    const submit = (e) => {
        e.preventDefault();
        if (e.target.cat) {
            dispatch({type: 'cat', payload: e.target.cat.value})

        } else {
            dispatch({type: 'dog', payload: e.target.dog.value})
        }
    }
    return (
        <div>
            <div className={css.header}>

                <div>
                    <form onSubmit={submit}>
                        <label>Cat: </label><input type="text" name="cat"/>
                        <button>Save</button>
                    </form>
                </div>
                <div>
                    <form onSubmit={submit}>
                        <label>Dog: </label><input type="text" name='dog'/>
                        <button>Save</button>
                    </form>
                </div>
            </div>
            <hr/>
            <div className={css.wrap}>
                <div className={css.column}>
                    {state.cat &&
                    state.cat.map(value => <Animal key = {idUnique()} animal = {value} />)}
                </div>
                <div className={css.column}>
                    {state.dog &&
                    state.dog.map(value => <Animal key = {idUnique()}  animal = {value} />)}
                </div>
            </div>
        </div>

    );
}

export default App;
