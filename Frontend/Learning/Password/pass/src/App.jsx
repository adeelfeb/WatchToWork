import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  const GeneratePassword = useCallback(() => {
    let pass = ""
    let strn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) strn += "0123456789"
    if (character) strn += "!@#$%^&*()_-+={}[]|\\:;'<>,.?/"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * strn.length)
      pass += strn.charAt(char)
    }
    setPassword(pass)
  }, [length, number, character])

  return (
    <>
    
      <div className='bg-black min-h-screen p-9 m-4 rounded-xl'>
        <div className='rounded-full w-full max-w-md mx-auto shadow-md px-4 my-8 text-orange-600
        bg-gray-700'>
          testing
        </div>
      </div>
      {/* <div className='bg-black min-h-screen'>
        <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      </div> */}
    </>
  )
}

export default App
