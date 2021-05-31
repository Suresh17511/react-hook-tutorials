import React, {useReducer} from 'react';
const initialValue = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, firstCounter: state.firstCounter + 1};
    case 'decrement':
      return {...state, firstCounter: state.firstCounter - 1};
    case 'incrementTwo':
      return {...state, secondCounter: state.secondCounter + 1};
    case 'decrementTwo':
      return {...state, secondCounter: state.secondCounter - 1};
    case 'reset':
      return initialValue;
    default:
      return state;
  }
};
function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h2>First Counter - {count.firstCounter}</h2>
      <h2>Second Counter -{count.secondCounter}</h2>
      <button onClick={() => dispatch({type: 'increment'})}>
        increment Counter-1
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>
        Decrement Counter-1
      </button>
      <button onClick={() => dispatch({type: 'incrementTwo'})}>
        increment Counter-2
      </button>
      <button onClick={() => dispatch({type: 'decrementTwo'})}>
        Decrement Counter-2
      </button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  );
}

export default CounterTwo;
