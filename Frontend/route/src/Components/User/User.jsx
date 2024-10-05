import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams()
    return (
    <div className='bg-black text-white p-8 border-pink-500 rounded-lg text-center text-lg'>User: {userid}</div>
  )
}

export default User