import { useEffect, useState } from "react";
import API_KEY from "./api"; // Adjust the import path as necessary

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const res = await response.json();
        
        if (res && res.conversion_rates) {
          setData(res.conversion_rates); // store only conversion rates
        } else {
          console.error("Unexpected API response", res);
        }
      } catch (err) {
        console.error("Failed to fetch currency data", err);
        setError(err.message); // Capture the error message
      } finally {
        setLoading(false); // Set loading to false after the request completes
      }
    };

    fetchCurrencyData();
  }, [currency]); // Only depend on currency

  return { data, loading, error }; // Return data, loading state, and error
}

export default useCurrencyInfo;




// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState({});
  
//   useEffect(() => {
//     let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
    
//     fetch(url)
//       .then((res) => res.json())
//       .then((res) => setData(res[currency]))
//       .catch((err) => console.error('Failed to fetch currency data', err));

//   }, [currency]); // add 'currency' as a dependency

//   return data;
// }

// export default useCurrencyInfo;
