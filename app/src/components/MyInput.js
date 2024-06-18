import React, { useState } from 'react';

function MyInput(props) {
  const [name, setName] = useState('');

  return (
    <>
      <div>{props.label}</div>
      <input onChange={(e) => setName(e.target.value)} />
      <div>
        {props.output}: {name}
      </div>
    </>
  );
}

export default MyInput;
