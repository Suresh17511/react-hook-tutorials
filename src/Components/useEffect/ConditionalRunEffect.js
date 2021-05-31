import React, {useState, useEffect} from 'react';

function ConditionalRunEffect() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const changeInput = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    console.log('useEffect triggered...!!!');
    document.title = `Counter Page - ${count}`;
  }, [count]);
  return (
    <div>
      <div>
        <input type="text" value={inputValue} onChange={changeInput} />
      </div>
      <div>
        <h4>Count - {count}</h4>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment Count
        </button>
      </div>
    </div>
  );
}

export default ConditionalRunEffect;
