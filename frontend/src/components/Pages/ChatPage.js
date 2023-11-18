import { ChatState } from "../../context/chatprovider";
import { Box, ChakraProvider } from "@chakra-ui/react";
import SideDrawer from "../miscellaneous/SideDrawer";
import MyChats from "../miscellaneous/MyChats";
import ChatBox from "../miscellaneous/ChatBox";

const ChatPage = () => {
  const { user } = ChatState();

   return(
    <ChakraProvider>
    <div style = {{width: "100%"}}>
    {user && <SideDrawer/>}
    <Box backgroundColor={"red.100"} display="flex" flexDirection={"row"} justifyContent="space-between" w="100%" h="91.5vh" p="10px" >
      {user && <MyChats/>}
      {user && <ChatBox/>}
    </Box>
    </div>
    </ChakraProvider>
    );
    
};

export default ChatPage;