import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container, Link, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>John Lee - Portfolio</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>

            <Box
                align="center"
                fontSize={10}
            >
                Fonts made from{' '}
                <Link
                    as={NextLink}
                    href="http://www.onlinewebfonts.com"
                >
                    Web Fonts
                </Link>
                {' '}is licensed by CC BY 4.0. PP Telegraf authored by{' '}
                <Link
                    as={NextLink}
                    href="https://www.onlinewebfonts.com/author/Nick_Losacco"
                >
                    Nick Losacco
                </Link>
                {' '}. Microgramma D Medium Extended authored by Alessandro Butti and Aldo Novarese.
            </Box>
        </Box>
    )
}

export default Main