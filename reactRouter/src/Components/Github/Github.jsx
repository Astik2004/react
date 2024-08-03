import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData]=useState([]);
    useEffect(()=>{
       fetch('https://api.github.com/users/Astik2004') 
       .then(res=>res.json())
       .then(data=>{
        console.log(data);
        setData(data);
       })
    },[])
  return (
    <div className='text-white bg-gray-600 p-4 m-4 text-centre text-3xl'><h1>Github Followers:{data.followers}</h1>
    <h1>Github Following:{data.following}</h1>
    <img className='text-center' src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github
