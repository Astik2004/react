import { useRef, useState } from "react"
import React from 'react'

function Form() {
    let inputref1=useRef(null);
    let inputref2=useRef(null);
    let [set1,setVal1]=useState("");
    let [set2,setVal2]=useState("");

    function submitForm(e){
        e.preventDefault();
        setVal1(inputref1.current.value);
        setVal2(inputref2.current.value);
        
    }

  return (
    <div>
      <form onSubmit={submitForm}>
        <input ref={inputref1} type="text" /><br /><br />
        <input ref={inputref2} type="text" /><br /><br />
        <button>Submit</button><br /><br />
        <h1>Val 1 : {set1}</h1><br />
        <h1>Val 2 : {set2}</h1>
      </form>
    </div>
  )
}

export default Form
