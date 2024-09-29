import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  //using Useref
  const refpassword = useRef(null)

  const GeneratePassword = useCallback(() => {
    let pass = ""
    let strn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) {strn += "0123456789"}
    if (character){ strn += "!@#$%^&*()_-+={}[]|\\:;'<>,.?/"}

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * strn.length)
      pass += strn.charAt(char)
    }
    setPassword(pass)
  }, [length, number, character])

  const copyPassword = useCallback(()=>{
    refpassword.current?.select()
    refpassword.current?.setSelectionRange(0, 101)
    window.navigator.clipboard.writeText(password)
  },[password])
  
  useEffect(()=>{
    GeneratePassword()
  },[number, length, character, setPassword])

  return (
    <>
    
      <div className='bg-black min-h-screen p-4 m-4 rounded-xl'>
        <div className='rounded-lg w-full max-w-md mx-auto shadow-md px-4 my-8 text-orange-600
        bg-gray-700 p-4'>
            <h1 className='text-white text-center my-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text" 
            value={password}
            className='outline-none w-full py-1 px-3 p2'
            placeholder='Password' 
            readOnly
            ref={refpassword}/>
            <button 
            onClick={copyPassword}
            className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'>Copy</button>

          </div>
          <div className='flex text-sm gap-x-3'>
            <div className='flex items-center gap-x-1'>
              <input type="range" 
              value={length}
              className='cursor-ponter'
              onChange={(e)=>{
                setLength(e.target.value)
              }} />
              <label htmlFor="">Length: {length}</label>
            </div>
            <div className='flex item-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={number}
              id='numeberInput'
              onChange={(e)=>{
                setNumber((prev)=>
                  !prev
                )
              }} />
              <label htmlFor='numberInput'>Number</label>
            </div>
            <div className='flex item-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={character}
              id='characterInput'
              onChange={(e)=>{
                setCharacter((prev)=>
                  !prev
                )
              }} />
              <label htmlFor='characterInput'>Character</label>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='bg-black min-h-screen'>
        <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      </div> */}
    </>
  )
}

export default App
