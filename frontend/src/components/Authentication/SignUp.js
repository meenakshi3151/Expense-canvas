import React from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SignUp = ({ handleTabChange }) => {

        const [show, setShow] = useState(false);
        const handleClick = () => setShow(!show);
        const toast = useToast();
        const navigate = useNavigate();


        const [name, setName] = useState();
        const [email, setEmail] = useState();
        const [confirmpassword, setConfirmpassword] = useState();
        const [password, setPassword] = useState();
        const [pic, setPic] = useState();
        const [picLoading, setPicLoading] = useState(false);

function navigateF(url){
console.log(url);
    window.location.href = url;  
}

async function auth(){
  const response =await fetch('http://localhost:5000/requestAuth',{method:'post'});
  const data = await response.json();
  console.log(data);
  navigateF(data.url);
}

      const postDetails = (pics) => { 
        setPicLoading(true);
        if (pic === undefined){
          toast({
            title: "Choose your Image!!",
            status: "Warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          return;
        }
        console.log(pics);
        if (pics.type === "image/jpeg" || pics.type === "image/png"){
          const data = new FormData();
          data.append("file, pic");
          data.append("upload_preset", "Expence-canvas");
          data.append("cloud_name", "dqc16gcum");
          fetch("https://api.cloudinary.com/v1_1/dqc16gcum",{
            method: 'post',
            body: data,
          }).then((res) => res.json())
          .then(data => {
            setPic(data.url.toString());
            // console.log(data.url.toString());
            setPicLoading(false);
          });
        } else{
          toast({
            title: "Choose your Image!!",
            status: "Warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          setPicLoading(false);
          return;
        }
      };


      const submitHandler = async () => {
        setPicLoading(true);
        if (!name || !email || !password || !confirmpassword) {
          toast({
            title: "Please Fill all the Fields",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          setPicLoading(false);
          return;
        }
        if (password !== confirmpassword) {
          toast({
            title: "Passwords Do Not Match",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          return;
        }
        console.log(name, email, password, pic);
      
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          const response = await axios.post(
            "http://localhost:5000/api/user",
            {
              name,
              email,
              password,
              pic,
            },
            config
          );
      
          if (response.data) {
            // Check if the 'data' property is available in the response
            const data = response.data;
            console.log(data);
            toast({
              title: "Registration Successful",
              status: "success",
              duration: 5000,
              isClosable: true,
              position: "bottom",
            });
            // localStorage.setItem("userInfo", JSON.stringify(data));
          } else {
            // Handle the case where the response does not contain 'data'
            toast({
              title: "Error Occured: No Data in Response",
              status: "error",
              duration: 5000,
              isClosable: true,
              position: "bottom",
            });
          }
      
          setPicLoading(false);
          // navigate('/Login'); //To navigate to the login tab
          handleTabChange(0);
        } catch (error) {
          toast({
            title: "Error Occured!",
            description: error.response?.data?.message || "An error occurred",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          setPicLoading(false);
        }
      };
      
  

    return <VStack spacing="5px">
    <FormControl id="first-name" isRequired>
      <FormLabel>Name</FormLabel>
      <Input
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
      />
    </FormControl>
    <FormControl id="email" isRequired>
      <FormLabel>Email Address</FormLabel>
      <Input
        type="email"
        placeholder="Enter Your Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />
    </FormControl>
    <FormControl id="password" isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup size="md">
        <Input
          type={show ? "text" : "password"}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
    <FormControl id="password" isRequired>
      <FormLabel>Confirm Password</FormLabel>
      <InputGroup size="md">
        <Input
          type={show ? "text" : "password"}
          placeholder="Confirm password"
          onChange={(e) => setConfirmpassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
    <FormControl id="pic">
      <FormLabel>Upload your Picture</FormLabel>
      <Input
        type="file"
        p={1.5}
        accept="image/*"
        // onChange={(e) => postDetails(e.target.files[0])}
      />
    </FormControl>
    <Button
      colorScheme="blue"
      width="100%"
      style={{ marginTop: 15 }}
      onClick={submitHandler}
      isLoading={picLoading}
    >
      Sign Up
    </Button>
    {/* <Button 
     colorScheme="blue"
     width="100%"
     style={{ marginTop: 15 }}
     onClick={()=> auth()}>
          Sign up with google
            </Button> */}
  </VStack>
}

export default SignUp