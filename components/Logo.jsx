import { Text } from '@chakra-ui/react'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <Text fontFamily="M Plus Rounded 1c" fontWeight="bold" ml={3}>
        DY
      </Text>
    </Link>
  )
}

export default Logo
