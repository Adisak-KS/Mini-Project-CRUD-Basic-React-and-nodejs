import React, { useState } from 'react';

function MyInput() {
  const [name, setName] = useState('');

  return (
    <>
      <div>Enter your name</div>
      <input onChange={(e) => setName(e.target.value)} />
      <div>{name}</div>
    </>
  );
}

export default MyInput;
