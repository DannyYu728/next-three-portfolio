import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  fonts: {
    heading: 'Arial, sans-serif',
    body: 'Arial, sans-serif'
  }
})

export default theme
