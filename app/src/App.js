import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const changeName = (e)=>{
    setName (e.target.value)
  }

  return (
    <div className="">
      <input onChange={(e)=> changeName(e)}/>
      <input onChange={e => setPhone(e.target.value)} />

      <div>name = {name}</div>
      <div>phone = {phone}</div>
    </div>
  );
}

export default App;
