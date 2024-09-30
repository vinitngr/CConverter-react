import { useState } from "react";
import PropTypes from "prop-types";
function Input({
  amount,
  currencyOptions,
  selectCurrency,
  onCurrencyChange,
  onAmountChange,
  onSCurrencyChange,
  SselectCurrency ,
  onconvertedAmount ,
  convertedAmount   ,
}) {
    const [submittedAmount, setSubmittedAmount] = useState(amount); 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(amount , selectCurrency , 'to' , SselectCurrency);
    setSubmittedAmount(amount)
    onconvertedAmount(amount)
  };



  return (
    <>
      <div className="h-screen bg-[#9873FE] flex justify-center items-center ">
        <div className="p-5 rounded-xl w-[380px] flex flex-col gap-2 bg-white">
          <div className="flex justify-center overflow-hidden h-[140px]">
            <img src="converter.png" className="h-40" />
          </div>
          <div className="flex items-center justify-center text-xl font-bold h-20">
            <h2 className="hand text-3xl">Currency converter</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="font-semibold text-md" htmlFor="amount">
                Amount:
              </label>
              <input
                id="amount"
                type="number"
                className="block outline-none w-full h-10 border-b-2 border-blue-950 p-1"
                placeholder="100"
                value={amount}
                onChange={(e) =>
                  onAmountChange && onAmountChange(Number(e.target.value))
                }
              />
            </div>
            <div className="flex gap-2 ">
              <div className="from bg-purple-600 h-10 w-1/2 rounded mt-5 flex justify-center items-center text-white">
                <select
                  className="text-white bg-transparent"
                  value={selectCurrency}
                  onChange={(e) => onCurrencyChange(e.target.value)}
                >
                  {currencyOptions.map((currency, index) => (
                    <option key={index} value={currency} className="text-black">
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
              <button
              onClick={
                () => {
                  const tempCurrency = selectCurrency;
                  onCurrencyChange(SselectCurrency);
                  onSCurrencyChange(tempCurrency);
                }
              }
                type="button"
                className="bg-purple-600 w-20 rounded mt-5 flex justify-center items-center text-white">
                    <img src="swap.svg" />
              </button>
              <div className="to bg-purple-600 h-10 w-1/2 rounded mt-5 flex justify-center items-center text-white">
              <select
                  className="text-white bg-transparent"
                  value={SselectCurrency}
                  onChange={(e) => onSCurrencyChange(e.target.value)}
                >
                  {currencyOptions.map((currency, index) => (
                    <option key={index} value={currency} className="text-black">
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="convert bg-purple-600 h-12 mt-5 w-full rounded flex justify-center items-center text-white"
            >
              Convert
            </button>
          </form>
          <div className="convert bg-purple-300 h-12 mt-2 rounded flex justify-center items-center text-purple">
            <div className="result font-bold" id="result">{submittedAmount} {selectCurrency} = {convertedAmount ? convertedAmount.toFixed(2) : 83.71} {SselectCurrency}</div>
          </div>
        </div>
      </div>
    </>
  );
}

Input.propTypes = {
    amount: PropTypes.number.isRequired,
    currencyOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectCurrency: PropTypes.string.isRequired,
    onCurrencyChange: PropTypes.func.isRequired,
    onAmountChange: PropTypes.func.isRequired,
    onSCurrencyChange: PropTypes.func.isRequired,
    SselectCurrency: PropTypes.string.isRequired,
    onconvertedAmount: PropTypes.func.isRequired,
    convertedAmount: PropTypes.number,
}
export default Input;

