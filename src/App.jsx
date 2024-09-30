/* eslint-disable no-unused-vars */
import { useState } from "react";
import Input from "./components/Input";
import Fetch from "./hooks/Fetch";
function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const data = Fetch({ currency: from });
  const options = Object.keys(data);

  return (
    <>
      <Input
        onAmountChange={(amount) => setAmount(amount)}
        amount={amount}
        currencyOptions={options}
        selectCurrency={from}
        SselectCurrency={to}
        onSCurrencyChange={(currency) => setTo(currency)}
        onCurrencyChange={(currency) => setFrom(currency)}
        onconvertedAmount={()=> setConvertedAmount(amount * data[to])}
        convertedAmount = {convertedAmount}
      />
    </>
  );
}

export default App;
