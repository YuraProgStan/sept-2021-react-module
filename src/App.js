import {useReducer} from "react";

import css from './App.module.css'
import Cat from "./components/Cat/Cat";
import Dog from "./components/Dog/Dog";
import Form from "./components/Form/Form";

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCat':
            return {...state, cats: [...state.cats, {id: new Date().getTime(), name: action.payload}]};

        case 'addDog':
            return {...state, dogs: [...state.dogs, {id: new Date().getTime(), name: action.payload}]};

        case 'delCat':
            // return {...state, cat: state.cat.filter(cat => cat.id !== action.payload.id)}
            const cats = [...state.cats];
            const indexCat = cats.findIndex(cat => cat.id === action.payload.id);
            cats.splice(indexCat, 1);
            return {...state, cats};

        case 'delDog':
            // return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)};
            const dogs = [...state.dogs];
            const indexDog = dogs.findIndex(dog => dog.id === action.payload.id);
            dogs.splice(indexDog, 1);
            return {...state, dogs};

        default:
            return state
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    return (
        <div>
            <Form dispatch={dispatch}/>
            <hr/>
            <div className={css.wrap}>
                <div className={css.column}>
                    {state.cats &&
                    state.cats.map(value => <Cat key={value.id} cat={value} dispatch={dispatch}
                    />)}
                </div>
                <div className={css.column}>
                    {state.dogs &&
                    state.dogs.map(value => <Dog key={value.id} dog={value} dispatch={dispatch}
                    />)}
                </div>
            </div>
        </div>
    );
}

export default App;
