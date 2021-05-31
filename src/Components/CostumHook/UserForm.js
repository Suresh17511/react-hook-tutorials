import React from 'react';
import useInput from './Hook/useInput';

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('');
  const submitHandler = (e) => {
    e.preventDefault();
    alert(`hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <div>
        <form onSubmit={submitHandler}>
          <input type="text" {...bindFirstName} />
          <input type="text" {...bindLastName} />
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
