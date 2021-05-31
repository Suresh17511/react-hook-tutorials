import React, {useState, useEffect} from 'react';
const initialValue = 0;
function InCorrectDependency() {
  const [count, setCount] = useState(initialValue);
  const [display, setDisplay] = useState(true);
  const [buttonState, setButtonState] = useState(true);
  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const stopTimer = () => {
    setDisplay(!display);
    setCount(initialValue);
    setButtonState(!buttonState);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      console.log('component Unmounted');
      clearInterval(interval);
    };
  }, [display]);
  return (
    <div>
      <div>{display ? <h1>{count}</h1> : <h1>{initialValue}</h1>}</div>
      <button onClick={stopTimer}>
        {buttonState ? 'stop timer' : 'start timer'}
      </button>
    </div>
  );
}

export default InCorrectDependency;
