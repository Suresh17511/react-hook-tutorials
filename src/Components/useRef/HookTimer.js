import React, {useState, useEffect, useRef} from 'react';

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      <h2>useRef Example-2</h2>
      <div>
        <h1>Timer -{timer}</h1>
      </div>
      <div>
        <button onClick={() => clearInterval(intervalRef.current)}>
          Stop Timer
        </button>
      </div>
    </div>
  );
}

export default HookTimer;
