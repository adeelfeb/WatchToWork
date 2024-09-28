import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const Increment = () => {
    if (count !== 20) {
      setCount(count + 1)
    }
  }

  const Decrement = () => {
    if (count !== 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className='bg-green'>
      <h1>Getting started again here!</h1>
      <h2>Counter is at: {count}</h2>
      <button onClick={Increment}>
        Increase
      </button>
      <button onClick={Decrement}>Decrease</button>
    </div>
  )
}

export default App
