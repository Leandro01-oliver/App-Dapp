import { Image } from "@chakra-ui/react";

const NavLogo = () =>{

    return(
        <>
            <Image 
            src='/blochain.png'  
            w={'40px'}
            h={'40px'}
            cursor={'pointer'}
            borderRadius={'50%'}
            />
        </>
    )
}


export default NavLogo;