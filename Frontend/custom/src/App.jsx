import { useState } from 'react';
import { InputBox } from './Components';
import useCurrencyInfo from './hook/useCurrencyInfo';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('USD'); // Default to uppercase
  const [to, setTo] = useState('PKR'); // Default to uppercase
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyObject, loading, error } = useCurrencyInfo(from);
  const currencyKeys = Object.keys(currencyObject || {}); // Safeguard in case currencyObject is empty

  const convert = () => {
    if (currencyObject && currencyObject[to]) {
      setConvertedAmount(amount * currencyObject[to]);
    } else {
      console.error(`Conversion rate for ${to} not available`);
    }
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount); // Swap amounts
    setConvertedAmount(0); // Reset converted amount
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/2522669/pexels-photo-2522669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={currencyKeys}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amt) => setAmount(amt)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={currencyKeys}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>

          {/* Display loading and error messages */}
          {loading && <p className="text-yellow-600">Loading currency data...</p>}
          {error && <p className="text-red-600">Error: {error}</p>}
          {convertedAmount > 0 && <p className="text-green-600">Converted Amount: {convertedAmount}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
