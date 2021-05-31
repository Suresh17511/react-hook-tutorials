import React, {useState, useEffect} from 'react';
import UseEffectOnlyOnce from './UseEffectOnlyOnce';

function UseEffectWithCleanUp() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <UseEffectOnlyOnce />}
    </div>
  );
}

export default UseEffectWithCleanUp;
