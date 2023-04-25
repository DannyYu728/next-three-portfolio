import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Link from 'next/link';

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex:
align-items: center;
height: 30px;
line-height: 20px;
padding 10px;

&:hover  {
  color: green;
}
`

const Logo = () => {

  return (
    <Link href="/">
        <LogoBox>
        <Text
            fontFamily="M Plus Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            DY
          </Text>
        </LogoBox>
    </Link>
  )
}

export default Logo