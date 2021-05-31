import React, {useState} from 'react';

function HookThree() {
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
  });
  return (
    <div>
      <div>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({...name, firstName: e.target.value})}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({...name, lastName: e.target.value})}
        />
      </div>
      <div>
        <h4>
          first name: {name.firstName} : last name: {name.lastName}
        </h4>
        <h4>{JSON.stringify(name)}</h4>
      </div>
    </div>
  );
}

export default HookThree;
