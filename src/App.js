import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);
  return (
    <>
  
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count +5);}}>increment</button>
      </>
  

  );
}

export default App;
