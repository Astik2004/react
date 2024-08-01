import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(1);

  const addValue=()=>{
    console.log("Value Added :",counter);
    //counter=counter+1;
    setCounter(counter+1);
  }

  const removeValue=()=>{
    if(counter==0)
    {
      setCounter(0);
    }
    else
    {
      setCounter(counter-1);
    }
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter is : {counter}</h2>
    <button onClick={addValue}>Add value</button><br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
