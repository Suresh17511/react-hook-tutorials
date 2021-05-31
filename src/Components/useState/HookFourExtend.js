import React, {useState} from 'react';

function HookFourExtend() {
  const [items, setItems] = useState([]);
  const [insertItemValue, setInsertItemValue] = useState('');
  const addItem = () => {
    setItems([...items, {id: items.length, value: insertItemValue}]);
  };
  const changeInput = (e) => {
    setInsertItemValue(e.target.value);
  };
  return (
    <div>
      <div>
        <input type="text" value={insertItemValue} onChange={changeInput} />
        <button type="submit" onClick={addItem}>
          Insert Item
        </button>
      </div>
      <ul>
        {items.map((item) => (
          <h4 key={item.id}>{item.value}</h4>
        ))}
      </ul>
    </div>
  );
}

export default HookFourExtend;
