import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ChakraProvider} from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import { GlobalProvider } from "./context/globalContext";
import  {GlobalStyle}  from './styles/GlobalStyle';
import {ThemeProvider} from './context/ThemeContext'


ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter> {/* Wrap your app with BrowserRouter */}

    <GlobalStyle/>
    <ThemeProvider>
      <GlobalProvider>
      <App />
      </GlobalProvider>
      </ThemeProvider>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);
