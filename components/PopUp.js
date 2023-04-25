import { Box, Button, Heading, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function Popup({ onConfirm, onCancel }) {
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
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.2 }}
        backgroundColor="black"
        border="1px solid black"
        padding="20px"
        textAlign="center"
        zIndex="2"
      >
        <Heading as="h3" size="md" color="white" marginBottom="10px">
          Do you want to enter?
        </Heading>
        <Link href="/project">
          <Button as="a" marginRight="10px" colorScheme="teal">
            Confirm
          </Button>
        </Link>
        <Button onClick={() => onCancel(false)} colorScheme="red">
          Cancel
        </Button>
      </MotionBox>
    </Flex>
  )
}
