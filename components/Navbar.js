import { Box, HStack, Link as ChakraLink, Spacer } from '@chakra-ui/react'
import NextLink from 'next/link'
import Logo from './Logo'
import ColorModeSwitch from './ColorModeSwitch'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const MotionChakraLink = motion(ChakraLink)

const Navbar = ({ path }) => {
  const isClient = typeof window !== 'undefined'

  const linkVariants = {
    hover: {
      scale: 1.1,
      textShadow: '0px 0px 10px white'
    },
    tap: {
      scale: 0.8,
      textShadow: '0px 0px 8px #80006f'
    }
  }

  const LinkItem = ({ path, target, href, text, ...props }) => {
    const active = path === href

    return (
      <MotionChakraLink
        as={NextLink}
        href={href}
        target={target}
        whileHover={active ? undefined : 'hover'}
        whileTap={active ? undefined : 'tap'}
        variants={linkVariants}
        fontWeight={active ? 'bold' : 'normal'}
        color={active ? 'green' : undefined}
        {...props}
      >
        {text}
      </MotionChakraLink>
    )
  }

  const Items = [
    { id: '0', href: '/', text: 'Home' },
    { id: '1', href: '/about', text: 'About' },
    { id: '2', href: '/project', text: 'Projects' },
    { id: '3', href: '/contact', text: 'Contact' }
  ]

  return (
    <Box as="nav" padding="1.2rem" borderBottomWidth="0.5px">
      <HStack spacing={3}>
        <Logo />
        <Spacer />
        {Items.map((ele, idx) => {
          return (
            <LinkItem href={ele.href} text={ele.text} key={idx} path={path} />
          )
        })}
        <ColorModeSwitch />
      </HStack>
    </Box>
  )
}

export default Navbar
