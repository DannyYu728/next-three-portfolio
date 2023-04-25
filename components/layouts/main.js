import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../Navbar';

const Main = ({ children, router }) => {
  
  return (
    <Box as="main" maxW="100vw" maxH="100vh">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Danny Yu Website</title>
      </Head>
      <Navbar path={router.asPath} />
      <Box>
        {children}
      </Box>
    </Box>
  )
}

export default Main