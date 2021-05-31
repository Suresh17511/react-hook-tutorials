import React, {useState} from 'react';

function useCustomCounter(initialValue = 0, value) {
  const [count, setCount] = useState(initialValue);
  const Increment = () => {
    setCount((prev) => prev + value);
  };
  const Decrement = () => {
    setCount((prev) => prev - value);
  };
  const Reset = () => {
    setCount(initialValue);
  };
  return [count, Increment, Decrement, Reset];
}

export default useCustomCounter;
