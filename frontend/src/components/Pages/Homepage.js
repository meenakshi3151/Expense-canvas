import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from "react" 
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
// import { useHistory } from "react-router";
import Login from "../Authentication/Login";
import Signup from "../Authentication/SignUp";
// import mainpage from "../Pages/mainpage"

function Homepage() {

  const navigate = useNavigate();
  
  useEffect(() =>{
    const user = JSON.parse (localStorage.getItem("userInfo"));
     
     if (user){
         navigate("/mainpage");
     }
    

 }, [navigate]);


  const [selectedTab, setSelectedTab] = useState(0); // 0 for Login, 1 for Sign Up

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          Welcome!!!!
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded" index={selectedTab}>
          <TabList mb="1em">
            <Tab onClick={() => handleTabChange(0)}>Login</Tab>
            <Tab onClick={() => handleTabChange(1)}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup handleTabChange={handleTabChange} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
