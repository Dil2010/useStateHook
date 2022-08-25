import { useState } from 'react';
import './App.css';
import Textmake from './Textmake';


function App() {
  const [counter,setcounter]=useState(0);

  const increment=()=>{
    setcounter(counter+1);
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <Textmake/>
    </div>
  );
}

export default App;
