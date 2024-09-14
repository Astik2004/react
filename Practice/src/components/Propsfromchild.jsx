import React from 'react'
function Propsfromchild(props) {
    const data="Astik Yadav";
  return (
    <div>
        <h1>Alert</h1>
        <button onClick={()=>props.alert(data)}>Click Me</button>
    </div>
  )
}

export default Propsfromchild
