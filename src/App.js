import {useReducer} from 'react'
const reducer = (state, action) =>{
  switch (action.type){
    case 'inc1':
      return {...state,count1: state.count1 + 1}
    case 'dec1':
      return {...state,count1: state.count1 - 1}
    case 'reset1':
      return {...state,count1: action.payload}
    case 'inc2':
      return {...state,count2: state.count2 + 1}
    case 'dec2':
      return {...state,count2: state.count2 - 1}
    case 'reset2':
      return {...state,count2: action.payload}
    case 'inc3':
      return {...state,count3: state.count3 + 1}
    case 'dec3':
      return {...state,count3: state.count3 - 1}
    case 'reset3':
      return {...state,count3: action.payload}
    default:
      return state
  }
}

const App = () => {
 const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0})
  return (
    <div>
      <div>
      <h3>Count1: <span>{state.count1}</span></h3>
<button onClick={() => dispatch({type:'inc1'})}>Inc</button>
<button onClick={() => dispatch({type:'dec1'})}>Dec</button>
<button onClick={() => dispatch({type:'reset1', payload:0})}>Reset</button>
      </div>
      <div>
        <h3>Count2: <span>{state.count2}</span></h3>
        <button onClick={() => dispatch({type:'inc2'})}>Inc</button>
        <button onClick={() => dispatch({type:'dec2'})}>Dec</button>
        <button onClick={() => dispatch({type:'reset2', payload:0})}>Reset</button>
      </div>
      <div>
        <h3>Count3: <span>{state.count3}</span></h3>
        <button onClick={() => dispatch({type:'inc3'})}>Inc</button>
        <button onClick={() => dispatch({type:'dec3'})}>Dec</button>
        <button onClick={() => dispatch({type:'reset3', payload:0})}>Reset</button>
      </div>
    </div>
  );
}

export default App;
