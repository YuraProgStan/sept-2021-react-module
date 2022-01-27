import css from './App.module.css'
import {useState} from "react";
// const reducer = (state, action) => {
//     switch (action.type){
//         case 'cat':
//             return {...state, value: state.value}
//         case 'dog':
//             return {...state, value: state.value}
//     }
// }

const App = () => {
    // const [formState, setFormState] = useState({cat: '', dog: ''})
    // const submit = (e) => {
    //     e.preventDefault();
    //     console.log({[e.target.name]: e.target.value});
    //
    // }
    return (
        <div>
            <h3>Component</h3>
            {/*<div className={css.wrap}>*/}

            {/*    <div>*/}
            {/*        <form onSubmit={submit}>*/}
            {/*            <label>Cat: </label><input type="text" name={'cat'} value={formState.cat}/>*/}
            {/*            <button>Save</button>*/}
            {/*        </form>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <form onSubmit={submit}>*/}
            {/*            <label>Dog: </label><input type="text" name={'dog'} value={formState.dog}/>*/}
            {/*            <button>Save</button>*/}
            {/*        </form>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <hr/>
        </div>

    );
}

export default App;
