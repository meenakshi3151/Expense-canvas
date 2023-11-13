import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import { GlobalProvider } from "./context/globalContext";

ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter> {/* Wrap your app with BrowserRouter */}
      <GlobalProvider>
      <App />
      </GlobalProvider>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);
