import styled from "styled-components";
import bg from "../../image/bg.png";
import React, { useEffect } from "react";
import { MainLayout } from "../../styles/Layout";
import Animation from "../Animation/Animation";
import Navigation from "../Navigation/Navigation";
import { useState, useMemo } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Income from "../Incomes/Income";
import Stocks from "../StocksCryptos/Stocks/Stocks";
import Expense from "../Expenses/Expenses";
import Crypto from "../StocksCryptos/Crypto";
import { useGlobalContext } from "../../context/globalContext";
import Bills from "../Bills/Bills";
import { useThemeContext } from "../../context/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChatPage from "./ChatPage";
import { useEditable } from "@chakra-ui/react";

function App() {
  const { toggleTheme, isDarkTheme } = useThemeContext();
  const [active, setActive] = useState(1);
  const { getCookies, setUser } = useGlobalContext();
  const [borderColor, setBorderColor] = useState("#333");

  useEffect(() => {
    const token = getCookies("token");
    if (token) {
      const data = {
        _id: getCookies("_id").split('"')[1],
        name: getCookies("name"),
        email: getCookies("email"),
        isAdmin: getCookies("isAdmin"),
        pic: getCookies("pic"),
        token: getCookies("token"),
      };
      setUser(data);
    }
  }, []);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expense />;
      case 5:
        return <ChatPage />;
      case 6:
        return <ChatPage />;
      case 7:
        return <Crypto />;
      case 8:
        return <Stocks />;
      case 9:
        return <Bills />;
      default:
        return <Dashboard />;
    }
  };

  // animation fir se start na ho (using useMemo)
  const animationMemo = useMemo(() => {
    return <Animation />;
  }, []);

  return (
    <AppStyled bg={bg} isDarkTheme={isDarkTheme}>
      {animationMemo}

      <MainLayout>
        <Navigation
          active={active}
          setActive={setActive}
          toggleTheme={toggleTheme}
        />
        <main>{displayData()}</main>

        {/* <LogoutButton onClick={handleLogout}>Logout</LogoutButton> */}
      </MainLayout>

      <ToastContainer autoClose={3000} position="top-right" />
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-color: ${(props) => (props.isDarkTheme ? "#333" : "#fff")};
  position: relative;
  main {
    flex: 1;
    display: flex;
    flex-direction: row;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid ${(props) => (props.isDarkTheme ? "#fff" : "#333")};
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

// const LogoutButton = styled.button`
// position: absolute;
// bottom:20px;
// right:20px;
// padding:10px 20px;
// background-color: #333;
// color: #fff;
// border: none;
// border-radius: 5px;
// cursor: pointer;
// `

export default App;

// import styled from "styled-components"
// import bg from './image/bg.png'
// import React from "react"
// import {MainLayout} from './styles/Layout'
// import Animation from './components/Animation/Animation'
// import Navigation from './components/Navigation/Navigation'
// import { useState,useMemo } from "react"
// import Dashboard from "./components/Dashboard/Dashboard"
// import Income from "./components/Incomes/Income"
// import Expense from "./components/Expenses/Expenses"
// import Crypto from './components/StocksCryptos/Crypto'
// import { useGlobalContext } from "./context/globalContext"
// import { useThemeContext } from "./context/ThemeContext";

// function App(){
//     const [active,setActive]=useState(1);
//     const use=useGlobalContext();
//     const { isDarkTheme, toggleTheme } = useThemeContext();
//     console.log(use);
//     const displayData=()=>{
//         switch(active){
//             case 1:
//                 return <Dashboard/>
//             case 2:
//                 return <Dashboard/>
//             case 3:
//                 return <Income/>
//             case 4:
//                 return <Expense/>
//             case 5:
//                 return <Dashboard/>
//             case 7:
//                 return <Crypto/>
//             default:
//                 return <Dashboard/>
//         }
//     }

//     // animation fir se start na ho (using useMemo)
//     const animationMemo=useMemo(()=>{
//         return <Animation/>
//     },[])

//     return(
//         <AppStyled bg={bg} >

//             {animationMemo}

//             <MainLayout >
//                 <Navigation active={active} setActive={setActive}/>
//                 <main>
//                     {displayData()}
//                 </main>
//             </MainLayout>
//         </AppStyled>
//     )
// }

// const AppStyled=styled.div`
//     height:100vh;
//     background-image :url(${props=>props.bg});
//     position:relative;
//     main{
//         flex:1;
//         display:flex;
//         flex-direction:row;
//         background:rgba(252,246,249,0.78);
//         border:3px solid #FFFFFF;
//         backdrop-filter:blur(4.5px);
//         border-radius:32px;
//         overflow:auto;
//         overflow-x:hidden;
//         &::-webkit-scrollbar{
//             width:0;
//         }
//     }
// `;

// export default App;
