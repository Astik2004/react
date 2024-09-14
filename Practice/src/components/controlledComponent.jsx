import { useState } from "react"
import React from 'react'

function ControlledComponent() {
    let [val,setVal]=useState("");
  return (
    <>
      <div>
        <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
        <h3>value:{val}</h3>
      </div>
    </>
  )
}

export default ControlledComponent
