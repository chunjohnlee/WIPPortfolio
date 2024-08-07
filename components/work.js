import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, VStack, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
    <Box mt={4}>
        <NextLink href="/works">
            <Link>Works</Link>
        </NextLink>
        <span>
            &nbsp;
            <ChevronRightIcon />
            &nbsp;
        </span>
        <Heading display='inline-block' as="h2" mb={4}>
            {children}
        </Heading>
    </Box>
)

export const WorkImage = ({ src, alt, children }) => (
    // Make the image align to center
    <VStack
        justifyContent="center"
        alignItems="center"
        mb={8}
    >
        <Image borderRadius="lg" w="full" src={src} alt={alt} maxWidth="container.md" />
        <Text fontSize={15}>
            {children}
        </Text>
    </VStack>
)

export const Meta = ({ children }) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)