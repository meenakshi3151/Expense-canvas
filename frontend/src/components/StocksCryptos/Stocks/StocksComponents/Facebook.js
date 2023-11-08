import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import Plot from 'react-plotly.js';
import { InnerLayout } from '../../../../styles/Layout';

import { Content } from '../Stocks.style';

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
}

export default Facebook;
