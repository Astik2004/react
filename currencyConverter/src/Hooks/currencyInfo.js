import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://www.freeforexapi.com/api/live?pairs=USD${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res.rates[`USD${currency}`].rate))
            .catch((error) => console.error("Error fetching data:", error));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
