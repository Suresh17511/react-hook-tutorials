import React, {useEffect, useRef} from 'react';

function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h2>useRef Hook</h2>
      <div>
        <input type="text" ref={inputRef} />
      </div>
    </div>
  );
}

export default FocusInput;
