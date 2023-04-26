import { Box, Button, Heading, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import NextLink from 'next/link'

export function Popup({ handlePopupAction, href, text }) {
  const MotionBox = motion(Box)

  return (
    <Flex
      position="fixed"
      zIndex={2}
      width="100%"
      height="100%"
      justify="center"
      align="center"
    >
      <MotionBox
        initial={{ opacity: 0, scale: 0.0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.0 }}
        transition={{ duration: 0.7 }}
        backgroundColor="black"
        border="1px solid black"
        padding="20px"
        textAlign="center"
        zIndex="2"
      >
        <Heading as="h3" size="md" color="white" marginBottom="10px">
          {text}
        </Heading>
        <NextLink href={href}>
          <Button
            marginRight="10px"
            colorScheme="teal"
            onClick={() => handlePopupAction(false)}
          >
            Confirm
          </Button>
        </NextLink>
        <Button onClick={() => handlePopupAction(false)} colorScheme="red">
          Cancel
        </Button>
      </MotionBox>
    </Flex>
  )
}
