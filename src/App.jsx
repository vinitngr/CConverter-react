/* eslint-disable no-unused-vars */
import { useState } from "react"
import Input from "./components/Input"
import Fetch from "./hooks/Fetch"
function App() {
  const [amount , setAmount] = useState(0)
  const [from, setFrom ] = useState('usd')
  const [to , setTo] = useState('inr')
  const [convertedAmount , seConvertedAmount] = useState(0)

  const data = Fetch({currency: from})
  const Options = Object.keys(data)

  return (
    <>
      <Input Options={Options}/>
    </>
  )
}

export default App

