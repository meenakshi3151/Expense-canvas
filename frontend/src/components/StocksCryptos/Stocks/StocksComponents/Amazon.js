import React, { useEffect, useMemo, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import Plot from 'react-plotly.js';
import { InnerLayout } from '../../../../styles/Layout';
import { Header } from '../Stocks.style';
import { Content } from '../Stocks.style';
function Amazon() {
  //taking two variables and declaring as an empty list
  const [stockXValues, setstockXValues] = useState([]);
  const [stockYValues, setstockYValues] = useState([]);
  //continuous rendering
  const API_KEY = 'A4SE3ACM4LG72242';
  const StockSymbol = 'AMZN';

  useEffect(() => {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&outputsize=full&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const stockXValuesFunction = [];
        const stockYValuesFunction = [];

        for (var key in data['Time Series (Daily)']) {
          stockXValuesFunction.push(key);
          stockYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
        }

        setstockXValues(stockXValuesFunction);
        setstockYValues(stockYValuesFunction);

      })
      .catch((error) => {
        console.error(error);
      });
  }, [StockSymbol, API_KEY]);
  const memoizedStockXValues = useMemo(() => stockXValues, [stockXValues]);
  const memoizedStockYValues = useMemo(() => stockYValues, [stockYValues]);
  console.log(memoizedStockXValues);
  return (


    <InnerLayout>
      {/* <Header>x-value:{memoizedStockXValues}</Header>
                <Header>y-values:{memoizedStockYValues}</Header> */}
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
          layout={{ width: 720, height: 440, title: 'AMAZON STOCKS' }}
        />
      </Content>
    </InnerLayout>

  )
}

export default Amazon;
