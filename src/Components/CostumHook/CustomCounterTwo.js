import React from 'react';
import useCustomCounter from './Hook/useCustomCounter';

function CustomCounterTwo() {
  const [count, Increment, Decrement, Reset] = useCustomCounter(0, 10);
  return (
    <div>
      <h2>Count-{count}</h2>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default CustomCounterTwo;
