import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, Link, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello there! I'm John, a VR software engineer based in London
                </Box>

                <Box display={{ md: "flex" }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            John Lee
                        </Heading>
                        <p>VR Software Engineer</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center">
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/profile.jpg"
                            alt="Profile image"
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3">
                        Work
                    </Heading>
                    <Paragraph>
                        As a Senior Software Engineer in{' '}
                        <NextLink href="https://fundamentalsurgery.com/">
                            <Link>FundamentalVR</Link>
                        </NextLink>
                        , I helped develop several VR medical training solutions for devices such as{' '}
                        <NextLink href="https://fundamentalsurgery.com/medical-device-case-study-teleflex/">
                            <Link>UroLift® system</Link>
                        </NextLink>
                        ,{' '}
                        <NextLink href="https://www.technosundae.com/vicarious-surgical-vr">
                            <Link>Vicarious Surgical Robot</Link>
                        </NextLink>
                        {' '}and a recently announced{' '}
                        <NextLink href="https://www.aao.org/newsroom/news-releases/detail/academy-fundamentalvr-collaborate-virtual-reality">
                            <Link>Ophthalmology Simulation</Link>
                        </NextLink>.
                        <Box h={3} />
                    </Paragraph>
                    <Paragraph>
                        My passion outside work is game dev. I've joined game jams and made:{' '}
                        <NextLink href="https://blackjlc.itch.io/finding-friendzy">
                            <Link>Finding Friendzy</Link>
                        </NextLink>,{' '}
                        <NextLink href="https://blackjlc.itch.io/hole-again">
                            <Link>Hole Again</Link>
                        </NextLink>{' '}and{' '}
                        <NextLink href="https://blackjlc.itch.io/nagashi-somen">
                            <Link>Nagashi Somen</Link>
                        </NextLink>
                        . I'm currently working on a grand strategy game called The Rulers.
                    </Paragraph>

                    <Box align="center" my={4}>
                        <NextLink href="/work">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>

                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1993</BioYear>
                        Born in Hong Kong (香港).
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        Completed BSc (Hons) Game Software Development at the University of Plymouth
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Completed MSc
                        Computer Graphics, Vision and Imaging at University College London
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Worked at{' '}
                        <NextLink href="https://www.neurotech.biz/">
                            <Link>Neurotech</Link>
                        </NextLink>
                        {' '}as a VR developer
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Worked at{' '}
                        <NextLink href="https://fundamentalsurgery.com/">
                            <Link>FundamentalVR</Link>
                        </NextLink>
                        {' '}as a Software Engineer
                    </BioSection>
                    <BioSection>
                        <BioYear>2024</BioYear>
                        Promoted to Senior Software Engineer at{' '}
                        <NextLink href="https://fundamentalsurgery.com/">
                            <Link>FundamentalVR</Link>
                        </NextLink>
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Other interests
                    </Heading>
                    <Paragraph>
                        Jazz, Folk music, Art, History, Politics, Video games, Coffee, Traveling, Jellied eels, Ramen, Pasta
                    </Paragraph>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page