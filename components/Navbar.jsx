import {
  Box,
  HStack,
  Link as ChakraLink,
  Spacer,
  Menu,
  MenuItem,
  MenuButton,
  IconButton,
  MenuList,
  Flex
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { FaHome, FaProjectDiagram, FaCity } from 'react-icons/fa'
import { GiBed } from 'react-icons/gi'
import { SiAboutdotme } from 'react-icons/si'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import NextLink from 'next/link'
import Logo from './Logo'
import ColorModeSwitch from './ColorModeSwitch'

const MotionChakraLink = motion(ChakraLink)

const Navbar = ({ path }) => {
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

  const MenuLink = forwardRef((props, ref) => {
    return <MotionChakraLink ref={ref} as={NextLink} {...props} />
  })
  MenuLink.displayName = 'MenuLink';

  const Items = [
    { id: '0', href: '/', text: 'Home' },
    { id: '1', href: '/about', text: 'About' },
    { id: '2', href: '/project', text: 'Projects' },
    { id: '3', href: '/contact', text: 'Contact' },
    { id: '4', href: '/town', text: 'Town' },
    { id: '5', href: '/room', text: 'Room' },
  ]

  return (
    <Flex
      as="nav"
      padding="1.2rem"
      borderBottomWidth="0.5px"
      justify="space-between"
    >
      <Flex align="center">
        <Logo />
      </Flex>
      <HStack
        spacing={3}
        direction={{ base: 'column', md: 'row' }}
        display={{ base: 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Spacer />
        {Items.map((ele, idx) => {
          return (
            <LinkItem href={ele.href} text={ele.text} key={idx} path={path} />
          )
        })}
        <ColorModeSwitch />
      </HStack>

      <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
        <ColorModeSwitch />
        <Menu isLazy id="navbar-menu">
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            aria-label="Options"
          />
          <MenuList>
            <MenuItem as={MenuLink} href="/">
              Home
              <FaHome />
            </MenuItem>
            <MenuItem as={MenuLink} href="/about">
              About
              <SiAboutdotme />
            </MenuItem>
            <MenuItem as={MenuLink} href="/project">
              My Projects
              <FaProjectDiagram />
            </MenuItem>
            <MenuItem as={MenuLink} href="/contact">
              Contact
              <SiAboutdotme />
            </MenuItem>
            <MenuItem as={MenuLink} href="/town">
              The Town
              <FaCity />
            </MenuItem>
            <MenuItem as={MenuLink} href="/room">
              The Room
              <GiBed />
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  )
}
export default Navbar
