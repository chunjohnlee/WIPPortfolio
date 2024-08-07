import Logo from './logo'
import NextLink from 'next/link'
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue, Button, Icon } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoLinkedin,
} from 'react-icons/io5'

const NavBarLinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.900', 'whiteAlpha.900')
    return (
        <Link
            as={NextLink}
            p={2}
            bg={active ? 'highlight' : undefined}
            color={active ? '#202023' : inactiveColor}
            href={href}>
            {children}
        </Link>
    )
}

const Navbar = props => {
    const { path } = props
    return (
        <Box
            pos="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >
            <Container display="flex" p={2} maxW="container.xl" wrap="wrap" align="center" justify="space-between">
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing="wide">
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <NavBarLinkItem href="/" path={path}>
                        About
                    </NavBarLinkItem>
                    <NavBarLinkItem href="/works" path={path}>
                        Works
                    </NavBarLinkItem>
                    {/* <LinkItem href="/posts" path={path}>
                        Posts
                    </LinkItem> */}
                </Stack>

                <Box flex={1} align="right">
                    <Stack
                        direction='row'
                        display='flex'
                        width='auto'
                        height='full'
                        alignItems="center"
                        justifyContent="right"
                        flexGrow={1}
                        mt={0}
                        alignContent="right"
                    >
                        <Link href="https://x.com/chunlee_john" target="_blank">
                            <IconButton
                                variant="ghost"
                                aria-label='Twitter'
                                color='highlight'
                                icon={<Icon as={IoLogoTwitter} />}
                                isRound={true}
                            />
                        </Link>
                        <Link href="https://github.com/blackjlc" target="_blank">
                            <IconButton
                                variant="ghost"
                                aria-label='GitHub'
                                color='highlight'
                                icon={<Icon as={IoLogoGithub} />}
                                isRound={true}
                            />
                        </Link>
                        <Link href="https://www.linkedin.com/in/chun-john-lee/" target="_blank">
                            <IconButton
                                variant="ghost"
                                aria-label='LinkedIn'
                                color='highlight'
                                icon={<Icon as={IoLogoLinkedin} />}
                                isRound={true}
                            />
                        </Link>
                        <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                            <Menu>
                                <MenuButton
                                    as={IconButton}
                                    icon={<HamburgerIcon />}
                                    variant="outline"
                                    aria-label="Options" />
                                <MenuList>
                                    <NextLink href="/" passHref>
                                        <MenuItem as={Link}>About</MenuItem>
                                    </NextLink>
                                    <NextLink href="/works" passHref>
                                        <MenuItem as={Link}>Works</MenuItem>
                                    </NextLink>
                                    {/* <NextLink href="/posts" passHref>
                                    <MenuItem as={Link}>Posts</MenuItem>
                                </NextLink> */}
                                </MenuList>
                            </Menu>
                        </Box>
                    </Stack>

                    {/* <ThemeToggleButton /> */}
                </Box>
            </Container >
        </Box >
    )
}

export default Navbar