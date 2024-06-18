import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const updateCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="">
      <header className="">
        counter = {counter}
      </header>
      <button onClick={updateCounter}>Click Here for update Value of counter</button>
    </div>
  );
}

export default App;
