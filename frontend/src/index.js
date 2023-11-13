import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
<<<<<<< HEAD
import { ChakraProvider} from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import { GlobalProvider } from "./context/globalContext";
import  {GlobalStyle}  from './styles/GlobalStyle';
=======
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import { GlobalProvider } from "./context/globalContext";
>>>>>>> a459a4c335e985db158ba85bf397aa465816aaf2

ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter> {/* Wrap your app with BrowserRouter */}
<<<<<<< HEAD
    <GlobalStyle/>
=======
>>>>>>> a459a4c335e985db158ba85bf397aa465816aaf2
      <GlobalProvider>
      <App />
      </GlobalProvider>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);
