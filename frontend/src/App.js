import styled from "styled-components"
import bg from './image/bg.png'
import React from "react"
import {MainLayout} from './styles/Layout'
import Animation from './components/Animation/Animation'
import Navigation from './components/Navigation/Navigation'
import { useState } from "react"
function App(){
      const [active,setActive]=useState(1);

       
    return(
        <AppStyled bg={bg} >
            <Animation/>
            <MainLayout >
                <Navigation active={active} setActive={setActive}/>
            </MainLayout>
        </AppStyled>
    )
}

const AppStyled=styled.div`
    height:100vh;
    background-image :url(${props=>props.bg});
    position:relative;
`;


export default App;