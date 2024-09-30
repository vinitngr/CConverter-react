import { useState } from "react";

function Input() {
    const [amount, setAmount] = useState(1);
  return (
    <>
      <div className="h-screen bg-[#9873FE] flex justify-center items-center ">
        <div className="p-5 rounded-xl w-[380px] flex flex-col gap-2 bg-white">
          <div className="flex justify-center overflow-hidden h-[140px]">
            <img src="converter.png" className="h-40" />
          </div>
          <div className="flex items-center  justify-center text-xl font-bold h-20">
            <h2 className="hand text-3xl">Currency converter</h2>
          </div>
          <div>
            <label className=" font-semibold text-md" htmlFor="amount">
              Amount:
            </label>
            <input
              id="amount"
              type="number"
              className="block outline-none w-full h-10 border-b-2 border-blue-950 p-1"
              placeholder="100"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="flex gap-2 ">
            <div className="from bg-purple-600 h-10  w-1/2 rounded mt-5 flex justify-center items-center text-white">
              USD
            </div>
            <button className="bg-purple-600 w-20 rounded mt-5 flex justify-center items-center text-white">
              <img src="swap.svg" />
            </button>
            <div className="to    bg-purple-600 h-10 w-1/2 rounded mt-5 flex justify-center items-center text-white">
              INR
            </div>
          </div>
          <button className="convert bg-purple-600 h-12 mt-5 rounded flex justify-center items-center text-white">
            Convert
          </button>
          <div className="convert bg-purple-300 h-12 mt-2 rounded flex justify-center items-center text-purple">
            <div className="result font-bold">1 USD = 90 RS</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Input;
