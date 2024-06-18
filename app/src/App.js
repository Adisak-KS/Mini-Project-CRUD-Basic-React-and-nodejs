import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MyInput from './components/MyInput';

function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const changeName = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="">
      <MyInput />
      <hr />
      <MyInput />
    </div>
  );
}

export default App;
