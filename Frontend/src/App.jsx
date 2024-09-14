import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [fromBackend, setfromBackend] = useState([])
 

  return (
    <>
    <div className='color:blue '>Getting started</div>
    <h1>From Backend</h1>
    <h2>Total Data {fromBackend.length}</h2>
    {

      fromBackend.map(()=>{
        <div key={fromBackend.id}>
          <h2>fromBackend.name</h2>
          <h2>fromBackend.reg</h2>
        
        </div>
      })
    }
    </>
  )
}

export default App
