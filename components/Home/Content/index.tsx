import { Button, Flex, Text, Box } from '@chakra-ui/react'
import { GoSignIn, GoSignOut } from 'react-icons/go';
import { useState } from "react"
import { wallet } from '../../../utils/we3/wallet';


const HomeContent = () =>{

    const [account, setAccount] = useState("");

    return(
        <>
        <Flex
        w={'100%'}
        p={'1rem'}
        minH={'calc(100vh - 50px)'}
        alignItems={'center'}
        justifyContent={'center'}
        flexDirection={'column'}
        >
        {
          account == "" ?
            <>
              <Button
                onClick={() => { wallet.connect(setAccount) }}
                display={'flex'}
                alignItems={'center'}
              >
                <Box
                mt={'.1rem'}
                >
                  <GoSignIn />
                </Box>
                <Text
                ml={'.5rem'}
                >
                  Entrar
                </Text>
              </Button>
            </>
            :
            <>
              <Box
                w={'100%'}
                mb={'1rem'}
                textAlign={'center'}
              >
                <Text
                fontSize={{base:'20px',lg:'2vw'}}
                >
                  Carteira :
                </Text>
                <Box>
                <Text
                >
                  {account}
                </Text>
                </Box>
              </Box>
              <Button
                onClick={() => { wallet.desconect(setAccount) }}
                display={'flex'}
                alignItems={'center'}
              >
                       <Box
                mt={'.1rem'}
                >
                  <GoSignOut />
                </Box>
                <Text
                     ml={'.5rem'}
                >
                  Sair
                </Text>
              </Button>
            </>
        }
        </Flex>
        </>
    )
}

export default HomeContent