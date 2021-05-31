import React, {useContext} from 'react';
import {CountContext} from '../../../App';
import ComponentB from './ComponentB';

function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <ComponentB />
      <h2>Component A {countContext.countState}</h2>
      <button onClick={() => countContext.countDispatch('increment')}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch('decrement')}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  );
}

export default ComponentA;
