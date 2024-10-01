import { useEffect, useState } from 'react'
 import axios from 'axios';
function Fetch({currency}) {
    const [data , setdata] = useState({})
   

    useEffect(() => {
        axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then(response => {
                setdata(response.data[currency]);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [currency]);
    
    return data ;
}

export default Fetch