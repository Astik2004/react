import React, { useState } from 'react'

function HigherCompo() {
  return (
    <div>
      <h1>HOC</h1>
      <CountRed cmp={Counter}/>
      <CountGreen cmp={Counter}/>
    </div>
  )
}
function CountRed(props){
    return(
        <h1 style={{backgroundColor:'red',wwidth:100}}><props.cmp/></h1>
    )
}
function CountGreen(props){
    return(
        <h1 style={{backgroundColor:'green',wwidth:100}}><props.cmp/></h1>
    )
}
function Counter(){
    const [count,setCount]=useState(0);
    return(
        <>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>Count</button>
        </>
    )
}

export default HigherCompo
