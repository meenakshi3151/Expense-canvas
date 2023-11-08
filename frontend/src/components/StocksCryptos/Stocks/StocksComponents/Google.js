import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js';
import { InnerLayout } from '../../../../styles/Layout';
import { Content } from '../Stocks.style';
import { useCallback, useMemo } from 'react';

function Google() {
  //taking two variables and declaring as an empty list
  const [stockXValues, setstockXValues] = useState([]);
  const [stockYValues, setstockYValues] = useState([]);
  //continuous rendering
  // useEffect(()=>{

  const API_KEY = `Q570RIJ8BWRFI3OJ`
  const StockSymbol = `AMZN`;
  useEffect(() => {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&outputsize=full&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const stockXValuesFunction = [];
        const stockYValuesFunction = [];

        for (var key in data['Time Series (Daily)']) {
          stockXValuesFunction.push(key);
          stockYValuesFunction.push(data['Time Series(Daily)'][key]['1. open']);
        }

        setstockXValues(stockXValuesFunction);
        setstockYValues(stockYValuesFunction);
        console.log(stockXValuesFunction);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [StockSymbol, API_KEY]);
  //then returning the memoized values so that the api we can avoid multiple calls
  const memoizedStockXValues = useMemo(() => stockXValues, [stockXValues]);
  const memoizedStockYValues = useMemo(() => stockYValues, [stockYValues]);
  return (

    <InnerLayout>

      <Content>
        <Plot
          data={[
            {
              x: memoizedStockXValues,
              y: memoizedStockYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'green' }
            }
          ]}
          layout={{ width: 720, height: 440, title: 'GOOGLE STOCKS' }}
        />
      </Content>
    </InnerLayout>

  )
}

export default Google;