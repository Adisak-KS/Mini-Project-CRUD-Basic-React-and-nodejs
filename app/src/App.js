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
      <MyInput label="Your Name" output="Name is" />
      <hr />
      <MyInput label="Age"  output="Your Age"/>
    </div>
  );
}

export default App;
