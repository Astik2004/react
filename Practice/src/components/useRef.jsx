import React, { useRef } from 'react'

function UseRef() {
    let inputRef=useRef(null);
    const handelInput=()=>{
        inputRef.current.value="1000000000000000";
        inputRef.current.focus();
        inputRef.current.style.color="red";
    }
  return (
    <>
      <h1>Useref in react</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handelInput}>Click Me</button>
    </>
  )
}

export default UseRef
