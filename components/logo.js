import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    img {
        transition: transform 0.2s ease-in-out;
    }

    &:hover img {
        transform: scale(1.3);
        transition: transform 0.2s ease-in-out;
    }
`

const Logo = () => {
    const logoImg = `/images/logo.png`

    return (
        <Link href="/">
            <LogoBox>
                <Image src={logoImg} width={20} height={20} alt="Logo" />
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily="Microgramma D Medium Extended"
                    fontWeight="bold"
                    ml={3}
                >
                    John Lee
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo