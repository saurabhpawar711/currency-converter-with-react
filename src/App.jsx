import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  let [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  let [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount = 0);
    setAmount(convertedAmount = 0);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }


  return (
    <div className='w-full h-screen flex bg-gray-400'>
      <div className="h-screen flex bg-cover bg-no-repeat">
        <img src="https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
      </div>
      <div className=' m-auto'>
        <h1 className=' text-center mb-12 text-3xl font-extrabold'>Currency Converter</h1>
        <div
          className="m-auto border border-gray-60 rounded-lg p-5 bg-gray-300"
        >
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            <div>
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className=' h-10  flex justify-center align-middle my-2'>
              <button className=' rounded-md bg-blue-600 text-white px-3 py-0.5'
                onClick={swap}>swap</button>
            </div>
            <div>
              <InputBox
                label='To'
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
              />
            </div>
            <button onClick={convert} className=' p-1 rounded-lg mt-3 w-full bg-blue-600 text-white'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
