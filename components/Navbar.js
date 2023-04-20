import { Box, HStack, Link as ChakraLink, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import Logo from './Logo';
import ColorModeSwitch from './ColorModeSwitch';
import { motion } from 'framer-motion';

const MotionChakraLink = motion(ChakraLink);

const Navbar = ({ path }) => {
  const isActive = (currentPath) => currentPath === path;

  const linkVariants = {
    hover: {
      scale: 1.1,
      textShadow: '0px 0px 8px rgb(255, 255, 255)',
    },
    tap: {
      scale: 0.95,
      textShadow: '0px 0px 8px rgb(255, 255, 255)',
    },
  };

  return (
    <Box as="nav" padding="1.5rem" borderBottomWidth="1px">
      <HStack spacing={4}>
        <Logo />
        <Spacer />
        <Link href="/" passHref>
          <MotionChakraLink
            whileHover="hover"
            whileTap="tap"
            variants={linkVariants}
            fontWeight={isActive('/') ? 'bold' : 'normal'}
          >
            Home
          </MotionChakraLink>
        </Link>
        <Link href="/about" passHref>
          <MotionChakraLink
            whileHover="hover"
            whileTap="tap"
            variants={linkVariants}
            fontWeight={isActive('/about') ? 'bold' : 'normal'}
          >
            About Me
          </MotionChakraLink>
        </Link>
        <Link href="/projects" passHref>
          <MotionChakraLink
            whileHover="hover"
            whileTap="tap"
            variants={linkVariants}
            fontWeight={isActive('/projects') ? 'bold' : 'normal'}
          >
            Projects
          </MotionChakraLink>
        </Link>
        <Link href="/contact" passHref>
          <MotionChakraLink
            whileHover="hover"
            whileTap="tap"
            variants={linkVariants}
            fontWeight={isActive('/contact') ? 'bold' : 'normal'}
          >
            Contact
          </MotionChakraLink>
        </Link>
        <ColorModeSwitch />
      </HStack>
    </Box>
  );
};

export default Navbar;