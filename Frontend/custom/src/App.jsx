import { useState } from 'react'
import { InputBox } from './Components'
import useCurrencyInfo from './hook/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('pkr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyObject = useCurrencyInfo(from)
  const currencyKeys = Object.keys(currencyObject)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)

    const convert = ()=>{
      setConvertedAmount(amount * currencyObject[to])
    }
  }

  return (
    <>
      <button className='p-2 outline-dotted bg-pink-300 m-4'>Check this out</button>
    </>
  )
}

export default App
