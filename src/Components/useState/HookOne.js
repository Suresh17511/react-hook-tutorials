import React, {useState} from 'react';

function HookOne() {
  const [count, setCount] = useState(0);
  const countIncrement = () => {
    setCount((prevState) => prevState + 1);
  };
  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={countIncrement}>Count Increment</button>
    </div>
  );
}

export default HookOne;
