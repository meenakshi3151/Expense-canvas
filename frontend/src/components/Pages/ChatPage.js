import { ChatState } from "../../context/chatprovider";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../miscellaneous/SideDrawer";

const ChatPage = () => {
  // const { user } = ChatState();

   return <div style = {{width: "100%"}}>
    {<SideDrawer/>}
    <Box>
      {/* {user && <MyChats/>} */}
      {/* {user && <ChatBox/>} */}
    </Box>
    </div>;
    
};

export default ChatPage;