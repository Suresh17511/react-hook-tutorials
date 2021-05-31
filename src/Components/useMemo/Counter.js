import React, {useState, useMemo} from 'react';

function Counter() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementOne = () => {
    console.log('Render Count One');
    setCountOne(countOne + 1);
  };
  const incrementTwo = () => {
    setCountTwo(countTwo + 1);
    console.log('Render Count Two');
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      <h2>useMemo hook</h2>
      <div>
        <div>
          <button onClick={incrementOne}>Count one - {countOne}</button>
          <span>{isEven ? 'Even' : 'Odd'}</span>
        </div>
        <div>
          <button onClick={incrementTwo}>Count two - {countTwo}</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
