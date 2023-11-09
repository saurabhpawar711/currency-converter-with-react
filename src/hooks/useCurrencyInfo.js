import { useEffect } from "react";
import { useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((data) => data.json())
            .then((data => setData(data[currency])))
    }, [currency]);
    return data;
}

export default useCurrencyInfo;