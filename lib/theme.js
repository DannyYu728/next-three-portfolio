import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#86b8e8', '#202023')(props),
      // color: mode('#ff6f6e', '#ff63c3')(props)
    },
    nav: {
      color: mode('#ff6f6e', '#ff63c3')(props)
    }
  })
}

const components = {
  Link: {
    baseStyle: props => ({
      color: mode('#ff6f6e', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  blue: 'blue'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
