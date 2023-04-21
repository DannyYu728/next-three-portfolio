import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../Navbar';

const Main = ({ children, router }) => {
  
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Danny Yu Website</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.lg" pt={10}>
        {children}
      </Container>
    </Box>
  )
}

export default Main