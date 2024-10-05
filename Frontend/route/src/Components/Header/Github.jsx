import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const userdata = useLoaderData()

    // const [userdata, setUserData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/adeelfeb')
    //     .then(response => response.json())
    //     .then(data => setUserData(data))
    // },[])
  return (
    <div className='bg-gray-700 p-4 text-center text-white m-4 text-3xl'>Github Followers: {userdata.followers}
    <img src={userdata.avatar_url} height={300} width={300} alt="" /></div>
  )
}

export default Github
export const githubUserData = async ()=>{
    const response = await fetch('https://api.github.com/users/adeelfeb')
    return response.json()
}