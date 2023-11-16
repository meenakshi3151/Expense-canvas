import { useState, useEffect, useMemo } from "react";

function GraphValues(symbol) {
    //the empty list for the values on x-axis and same for y-axis
    
  const [stockXValues, setStockXValues] = useState([]);
  const [stockYValues, 
    setStockYValues] = useState([]);
  const API_KEY = 'A4SE3ACM4LG72242';

  useEffect(() => {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=full&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        const stockXValuesFunction = [];
        const stockYValuesFunction = [];

        for (var key in data['Time Series (Daily)']) {
          stockXValuesFunction.push(key);
          stockYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
        }

        setStockXValues(stockXValuesFunction);
        setStockYValues(stockYValuesFunction);

      })
      .catch((error) => {
        console.error(error);
      });
  }, [symbol, API_KEY]);
//this will avoid rendering again and again .API key wont be called frequently
  return useMemo(() => ({
    x: stockXValues,
    y: stockYValues
  }), [stockXValues, stockYValues]);
}
export default GraphValues;
