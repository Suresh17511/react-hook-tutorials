import React, {useState, useEffect} from 'react';

function UseEffectOnlyOnce() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = (e) => {
    console.log('mouse event');
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log('UseEffect Called');
    window.addEventListener('mousemove', logMousePosition);
    // componentWillUnmount
    return () => {
      console.log('Mouse component Unmounted ');
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []);
  return (
    <div>
      Hooks X - {x} : Y - {y}
    </div>
  );
}

export default UseEffectOnlyOnce;
