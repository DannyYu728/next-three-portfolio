import React from 'react'
import {
  Container,
  Box,
  Heading,
  Text,
  Flex,
  List,
  ListItem
} from '@chakra-ui/react'

const Project = () => {
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
    >
      <Container mt={8} maxW={'container.md'}>
        <Box
          bg="#f26b38"
          height="300px"
          width="100%"
          borderRadius="50"
          alignSelf="center"
        />
        <Box textAlign="center" mb={6}>
          <Heading as="h2" size="xl" mb={4} color="#f26b38">
            About Me
          </Heading>
          <Text fontSize="lg" color="#ff6f6e">
            Like most Software engineers, I am also a Rock Climber with a love
            for food. I also have a passion for solving business problems
            through innovation, seeking new opportunities to challenge myself,
            and striving to make a positive impact. With a strong foundation in
            programming languages such as JavaScript, Python, and Java, and a
            deep understanding of databases like SQL and NoSQL, I bring a unique
            blend of technical expertise and business analysis to every project.
            I thrive in collaborative, thought-provoking environments that
            encourage diversity of thought, and am committed to building and
            fostering an innovative culture. Whether I am analyzing data to
            identify opportunities for improvement or developing new products or
            services, I am driven by a desire to make a difference and
            contribute to the success of the organizations I work with.
          </Text>
        </Box>
      </Container>
      <Container mt={12} maxW={'container.md'}>
        <Box>
          <Heading as="h3" size="lg" mb={4} color="#f26b38">
            Skills
          </Heading>
          <List spacing={3}>
            <ListItem color="#87bba2" fontWeight="bold">
              Frontend:
            </ListItem>
            <Text pl={6} fontSize="md" color="#ff6f6e">
              JavaScript, HTML5, CSS3, Typescript, Axios, React, Next.js,
              Express.js, React-Native, Tailwind, Redux Toolkit,
              React-Bootstrap, Chakra UI, Framer Motion, Three.js, React Three
              Fiber, Yuka, Sass
            </Text>
            <ListItem color="#87bba2" fontWeight="bold">
              Backend:
            </ListItem>
            <Text pl={6} fontSize="md" color="#ff6f6e">
              Python, NodeJS, TypeORM, Swagger, Nest.js, Jest, SqlAlchemy,
              PeeWee, Flask, Django, Numpy, Panda, Pytorch
            </Text>
            <ListItem color="#87bba2" fontWeight="bold">
              Databases:
            </ListItem>
            <Text pl={6} fontSize="md" color="#ff6f6e">
              PostgreSQL, MySQL, MongoDB
            </Text>
            <ListItem color="#87bba2" fontWeight="bold">
              Infrastructure and Others:
            </ListItem>
            <Text pl={6} fontSize="md" color="#ff6f6e">
              RESTful APIs, JSON APIs, OOD/OOP, Docker, AWS ECS & EC2
            </Text>
            <ListItem color="#87bba2" fontWeight="bold">
              Collaboration:
            </ListItem>
            <Text pl={6} fontSize="md" color="#ff6f6e">
              Git, Github, Slack, Trello, Agile, Scrum
            </Text>
          </List>
        </Box>
        <Box mt={6}>
          <Heading as="h3" size="lg" mb={4} color="#f26b38">
            Hobbies
          </Heading>
          <Text fontSize="md" color="#ff6f6e">
            In my free time, I enjoy hiking, traveling, and learning about new
            technologies. I also love photography and capturing the beauty of
            the world around me.
          </Text>
        </Box>
      </Container>
    </Flex>
  )
}

export default Project
