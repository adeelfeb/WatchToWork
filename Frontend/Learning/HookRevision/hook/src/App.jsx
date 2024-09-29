import { useState } from 'react'
import './App.css'
import Temp from '../Comp/Temp'

function App() {
  const [color, setColor] = useState("orange")

  return (
    <div className="full-width transition-duration padding-10" style={{ backgroundColor: color }}>
      <div className='fixed-bottom-center'>
        <div className='button-container'>
       
        <button className='button' style={{ backgroundColor: 'blue' }} onClick={() => {
          setColor('Blue')
        }}>Blue</button>

        <button className='button' style={{ backgroundColor: 'pink' }} onClick={() => {
          setColor('Pink')
        }}>Pink</button>

        <button className='button' style={{ backgroundColor: 'black' }} onClick={() => {
          setColor('Black')
        }}>Black</button>
        </div>
   
      </div>
    </div>
  )
}

export default App
