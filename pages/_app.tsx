import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { GlobalProvider } from '../context/GlobalProvider';

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
});


function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <GlobalProvider>
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </GlobalProvider>
    </>
  )
}

export default App;