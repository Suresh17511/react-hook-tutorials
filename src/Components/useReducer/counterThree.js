import React, {useReducer} from 'react';
const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialValue;
    default:
      return state;
  }
};
function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialValue);
  return (
    <div>
      <h2>CounterOne : {count}</h2>
      <h2>CounterTwo : {countTwo}</h2>
      <div>
        <button onClick={() => dispatch('increment')}>Increment C-1</button>
        <button onClick={() => dispatch('decrement')}>Decrement C-1</button>
        <button onClick={() => dispatch('reset')}>Reset C-1</button>
      </div>
      <div>
        <button onClick={() => dispatchTwo('increment')}>Increment C-2</button>
        <button onClick={() => dispatchTwo('decrement')}>Decrement C-2</button>
        <button onClick={() => dispatchTwo('reset')}>Reset C-2</button>
      </div>
    </div>
  );
}

export default CounterThree;
