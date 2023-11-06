import styled from "styled-components"
import bg from './image/bg.png'
import React from "react"
import {MainLayout} from './styles/Layout'
import Animation from './components/Animation/Animation'
import Navigation from './components/Navigation/Navigation'
import { useState,useMemo } from "react"
import Dashboard from "./components/Dashboard/Dashboard"
import Income from "./components/Incomes/Income"
import Expense from "./components/Expenses/Expenses"
import Crypto from './components/StocksCryptos/Crypto'
import { useGlobalContext } from "./context/globalContext"
function App(){
    const [active,setActive]=useState(1);
    const use=useGlobalContext();
    console.log(use);
    const displayData=()=>{
        switch(active){
            case 1:
                return <Dashboard/>
            case 2:
                return <Dashboard/> 
            case 3:
                return <Income/>  
            case 4:
                return <Expense/>
            case 5:
                return <Expense/>
            case 7:
                return <Crypto/>
            default:  
                return <Dashboard/>              
        }
    }



    // animation fir se start na ho (using useMemo)
    const animationMemo=useMemo(()=>{
        return <Animation/>
    },[])
       
    return(
        <AppStyled bg={bg} >
            
            {animationMemo}
            
            <MainLayout >
                <Navigation active={active} setActive={setActive}/>
                <main>
                    {displayData()}
                </main>
            </MainLayout>
        </AppStyled>
    )
}

const AppStyled=styled.div`
    height:100vh;
    background-image :url(${props=>props.bg});
    position:relative;
    main{
        flex:1;
        display:flex;
        flex-direction:row;
        background:rgba(252,246,249,0.78);
        border:3px solid #FFFFFF;
        backdrop-filter:blur(4.5px);
        border-radius:32px;
        overflow:auto;
        overflow-x:hidden;
        &::-webkit-scrollbar{
            width:0;
        }
    }
`;


export default App;