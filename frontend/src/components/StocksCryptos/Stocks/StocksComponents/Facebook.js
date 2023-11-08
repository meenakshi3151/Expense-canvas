import React, { useEffect, useState, useMemo } from 'react'
import styled, { keyframes } from 'styled-components';
import Plot from 'react-plotly.js';
import { InnerLayout } from '../../../../styles/Layout';

import { Content } from '../Stocks.style';
import { useCallback } from 'react';
function Facebook() {
  //taking two variables and declaring as an empty list
  const [stockXValues, setstockXValues] = useState([]);
  const [stockYValues, setstockYValues] = useState([]);
  //continuous rendering
  // useEffect(()=>{

<<<<<<< HEAD
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
          layout={{ width: 720, height: 440, title: 'FACEBOOK STOCKS' }}
        />
      </Content>
    </InnerLayout>

  )
=======
function Facebook(){
    //taking two variables and declaring as an empty list
    const [stockXValues,setstockXValues]=useState([]);
    const [stockYValues,setstockYValues]=useState([]);
    //continuous rendering
    useEffect(()=>{
        
        const API_KEY=`Q570RIJ8BWRFI3OJ`
        const StockSymbol=`AMZN`;
        let stockXValuesFunction=[];
        let stockYValuesFunction=[];
        //Api key is called 
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`)
        .then((response) => { 
          return response.json();
        })
        .then((data) => {
          console.log(data);
          //dates on x axis
          for(var key in data['Time Series (Daily)']){
            stockXValuesFunction.push(key);
            //opening price on y axis
            stockXValuesFunction.push(data['Time Series(Daily)'][key]['1.open']);
          }
          console.log(stockXValuesFunction)
          setstockXValues(stockXValuesFunction);
          setstockYValues(stockYValuesFunction);
        })
        .catch((error) => {
          console.error(error);
        });
    })
    return (
   
            <InnerLayout>
                
                  <Content>
                   <Plot 
                   data={[
                    {
                        x:stockXValues,
                        y:stockYValues,
                        type:'scatter',
                        mode:'lines+markers',
                        marker:{color:'green'}
                    }
                   ]}
                   layout={{width: 720, height: 440, title: 'FACEBOOK STOCKS'}}
                   />
                  </Content>
            </InnerLayout>
       
    )
>>>>>>> 16d6a2fa20111e2d22efcb03b61311d7993e6f85
}

export default Facebook;
