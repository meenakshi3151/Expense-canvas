import {Box, Button, Menu, MenuButton, MenuItem, MenuList, Text, Tooltip } from "@chakra-ui/react";
import {BellIcon, ChevronDownIcon} from "@chakra-ui/icons"
import React, { useState } from "react";
import { ChatState } from "../../context/chatprovider";

 
    const SideDrawer = () => {
        const [search, setSearch] = useState("");
        const [searchResult, setSearchResult] = useState([]);
        const [loading, setLoading] = useState(false);
        const [loadingChat, setLoadingChat] = useState(false);

        const {user} = ChatState();

    return(
        <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        width="100%"
        padding="5px 10px 5px 10px"
        borderWidth="5px"
        >
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost" >
            <i className="fas fa-search"></i>
            <Text d={{ base: "none", md: "flex" }} px={4}>
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize="2xl" fontFamily="Work sans">
          Friends and Groups
        </Text>
        <div>
            <Menu>
                <MenuButton padding={1}>
                {/* <NotificationBadge
                    count={notification.length}
                    effect={Effect.SCALE}
                /> */}
                <BellIcon fontSize="2xl" margin={1} />
                </MenuButton>
                {/* <MenuList pl={2}>
                {!notification.length && "No New Messages"}
                {notification.map((notif) => (
                    <MenuItem
                    key={notif._id}
                    onClick={() => {
                        setSelectedChat(notif.chat);
                        setNotification(notification.filter((n) => n !== notif));
                    }}
                    >
                    {notif.chat.isGroupChat
                        ? `New Message in ${notif.chat.chatName}`
                        : `New Message from ${getSender(user, notif.chat.users)}`}
                    </MenuItem>
                ))}
                </MenuList> */}
            </Menu>

             
             {/* **********For My Profile and Logout button************* */}
            {/* <Menu>
            <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.pic}
              />
            </MenuButton>
            <MenuList>
              <ProfileModal user={user}>
                <MenuItem>My Profile</MenuItem>{" "}
              </ProfileModal>
              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu> */}


        </div>

        </Box>
    )};

export default SideDrawer;