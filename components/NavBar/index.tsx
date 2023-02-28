import { Box, Flex, keyframes } from "@chakra-ui/react";
import DarkMode from "./DarkMode";
import NavLogo from "./Logo";

const NavBar = () =>{


    return(
        <>
         <Flex
          h={"50px"}
          w={"100%"}
          boxShadow={'0 0 10px 0 rgba(0,0,0,.25)'}
          alignItems={'center'}
          justifyContent={'space-between'}
          p={'1rem'}
          >
            <NavLogo/>
           <DarkMode/>
          </Flex>
        </>
    )
}

export default NavBar;