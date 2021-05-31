import React, {useState, useEffect} from 'react';

function EffectHookOne() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Counter Page - ${count}`;
  });
  return (
    <div>
      <div>
        <h4>Count - {count}</h4>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment Count
        </button>
      </div>
    </div>
  );
}

export default EffectHookOne;
