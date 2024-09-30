import { useEffect, useState } from 'react'

function Fetch({currency = 'inr'}) {
    const [data , setdata] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then(response => response.json())
        .then(json => setdata(json))
    }, [currency])
    return data ;
}

export default Fetch