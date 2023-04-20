import React from 'react';
import { Container, Box, Heading } from '@chakra-ui/react';
import Scene from '../components/Scene';

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a software engineer from New York!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Danny Yu
          </Heading>
          <p>Stuff Happen</p>
        </Box>
      </Box>
      <Scene />
    </Container>
  );
};

export default Page;