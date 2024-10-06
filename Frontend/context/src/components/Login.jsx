import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const  Login = ()=> {
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    
    const handleClick = (e)=>{
        e.preventDefault()
        setUser({Username, Password})
    }
  return (
    <div>
        <h1>Login</h1>
        <input type='text' placeholder='UserName'
        onChange={(e)=> setUsername(e.target.value)}
        value={Username}
        ></input>
        <input 
        value={Password}
        onChange={(e)=> setPassword(e.target.value)}
        type='password' placeholder='Password'></input>
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Login