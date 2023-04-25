import React from 'react'
import { Container, Box, Heading, Text } from '@chakra-ui/react'

const About = () => {
  return (
    <Container mt={8} maxW={'container.md'}>
      <Box textAlign="center" mb={6}>
        <Heading as="h2" size="xl" mb={4}>
          About Me
        </Heading>
        <Text fontSize="lg">
          My name is Danny Yu, and I'm a software engineer from New York.
        </Text>
      </Box>
      <Box>
        <Heading as="h3" size="lg" mb={4}>
          Skills
        </Heading>
        <Text fontSize="md">
          I have experience in web development, working with technologies like
          React, Next.js, and Chakra UI. I also enjoy exploring new libraries
          and frameworks, such as Three.js and Framer Motion for creating
          interactive 3D scenes and animations.
        </Text>
      </Box>
      <Box mt={6}>
        <Heading as="h3" size="lg" mb={4}>
          Hobbies
        </Heading>
        <Text fontSize="md">
          In my free time, I enjoy hiking, traveling, and learning about new
          technologies. I also love photography and capturing the beauty of the
          world around me.
        </Text>
      </Box>
    </Container>
  )
}

export default About
