// Import necessary dependencies/components
import { InnerLayout } from "../../../styles/Layout";
import { Content, Header, Heading } from "./Stocks.style";
import { useState, useEffect, useMemo } from "react";
import Plot from "react-plotly.js"; // Import Plot component from your plotting library
import GraphValues from "./StocksComponents/graphValues";
const symbols = [
    ["AMZN", "AMAZON STOCKS"],
    ["MSFT", "MICROSOFT STOCKS"],["GOOGL","GOOGLE STOCKS"],["META","META STOCKS"],["RELIANCE","RELIANCE INDUSTRIES STOCKS"],["TSLA","TESLA"]
  ];
function Stocks() {
  return (
    <InnerLayout>
      <Header>
        <Heading>Stocks</Heading>
      </Header>
      <Content>
        {/* calling the function for all the values in symbols array */}
        {symbols.map((symbol, i) => {
          const { x, y } = GraphValues(symbol[0]);
          return (
            <Plot
              key={i}
              data={[
                {
                  x,
                  y,
                  type: 'scatter',
                  mode: 'lines+markers',
                  marker: { color: 'green' }
                }
              ]}
              layout={{ width: 720, height: 440, title: symbol[1] }}
            />
          );
        })}
      </Content>
    </InnerLayout>
  );
}

export default Stocks;
