import React, {useState} from 'react';

function HookTwo() {
  let initialValue = 0;
  const [count, setCount] = useState(initialValue);
  return (
    <div>
      <h3>Count - {count}</h3>
      <div>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          Decrement
        </button>
        <button onClick={() => setCount(initialValue)}>Reset</button>
      </div>
    </div>
  );
}

export default HookTwo;
