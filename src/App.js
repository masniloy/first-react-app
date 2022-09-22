import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="app">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const countHendel = () => setCount(count + 1);
  const countHendel1 = () => setCount(count - 1);
  return (
    <div className='item'>
      <h1>Counter: {count} </h1>
      <button onClick={countHendel}>increase</button>
      <button onClick={countHendel1}>decrease</button>

    </div>
  );
}

export default App;