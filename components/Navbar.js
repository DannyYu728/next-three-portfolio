import { Box, HStack, Link as ChakraLink, Spacer } from '@chakra-ui/react'
import Link from 'next/link'
import Logo from './Logo'
import ColorModeSwitch from './ColorModeSwitch'
import { motion } from 'framer-motion'

const MotionChakraLink = motion(ChakraLink)

const Navbar = ({ path }) => {
  const isClient = typeof window !== 'undefined'
  const isActive = currentPath => (!isClient ? false : currentPath === path)

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

  const LinkItem = ({ href, children, ...props }) => {
    return (
      <MotionChakraLink
        as={Link}
        href={href}
        whileHover={isActive(href) ? undefined : 'hover'}
        whileTap={isActive(href) ? undefined : 'tap'}
        variants={linkVariants}
        fontWeight={isActive(href) ? 'bold' : 'normal'}
        color={isActive(href) ? 'green' : undefined}
        {...props}
      >
        {children}
      </MotionChakraLink>
    )
  }

  const Items = [
    { id: '0', href: '/', text: 'Home', icon: '🏠' },
    { id: '1', href: '/about', text: 'About', icon: 'ℹ️' },
    { id: '2', href: '/project', text: 'Projects', icon: '💻' },
    { id: '3', href: '/contact', text: 'Contact', icon: '📧' }
  ]

  return (
    <Box as="nav" padding="1.2rem" borderBottomWidth="0.5px">
      <HStack spacing={3}>
        <Logo />
        <Spacer />
        {Items.map((ele, idx) => {
          return <LinkItem href={ele.href} children={ele.text} />
        })}
        <ColorModeSwitch />
      </HStack>
    </Box>
  )
}

export default Navbar
