import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}=useParams();
  return (
    <div className='bg-gray-700 text-white p-4 text-3xl'>
      <h1>User:{userid}</h1>
    </div>
  )
}

export default User
