import { Box, Container, Heading, SimpleGrid, Divider, Text } from "@chakra-ui/react"
import Section from "../components/section"
import { WorkGridItem } from "../components/grid-item"
import Layout from '../components/layouts/article'

import thumpAAO from "../public/images/aao.png"
import thumpUrolift from "../public/images/urolift.jpg"
import thumpVicarious from "../public/images/vicarious.png"
import thumpWalledCity from "../public/images/wallcity_protest.jpg"

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="rop" title="Retinopathy of Prematurity VR simulation" thumbnail={thumpAAO}>
                            {/* A VR simulation that helps ophthalmologists to diagnose and treat Retinopathy of Prematurity (ROP), a potentially blinding eye disorder that primarily affects premature infants. */}
                            <Box h='5px' />
                            <Text fontSize={8} whiteSpace="pre-line">
                                All images and trademarks © 2024 American Academy of Ophthalmology. All rights reserved.
                            </Text>
                        </WorkGridItem>
                    </Section>

                    <Section>
                        <WorkGridItem id="vicarious" title="Vicarious Surgical VR" thumbnail={thumpVicarious}>
                            {/* A VR training simulation that allows surgeons to practice on the Vicarious Surgical Robot, a minimally invasive surgical system that leverages human-like robots and VR to perform surgeries remotely. */}
                            <Box h='5px' />
                            <Text fontSize={8} whiteSpace="pre-line">
                                All images and trademarks © 2023 Vicarious Surgical Incorporated. All rights reserved.
                            </Text>
                        </WorkGridItem>
                    </Section>

                    <Section>
                        <WorkGridItem id="urolift" title="UroLift® Training system" thumbnail={thumpUrolift}>
                            {/* A VR training platform that accelerates the effective use of the Teleflex’s UroLift® 2 System, an innovative technology for treatment of benign prostatic hyperplasia (BPH), commonly known as enlarged prostate. */}
                            <Box h='5px' />
                            <Text fontSize={8} whiteSpace="pre-line">
                                All images and trademarks © 2022 Teleflex Incorporated. All rights reserved.
                            </Text>
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.2}>
                    <Divider my={6} />

                    <Heading as="h3" fontSize={20} mb={4}>
                        Collaborations
                    </Heading>
                </Section>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.3}>
                        <WorkGridItem id="walled-city" title="Les Misérables in Kowloon Walled City VR" thumbnail={thumpWalledCity}>
                            {/* A VR immersive experience that takes you inside a miniature model of a 360-degree immersive theatre design of the Kowloon Walled City, a once densely populated, ungoverned settlement in Hong Kong that was demolished in the early 1990s. */}
                            <Box h='5px' />
                            <Text fontSize={8} whiteSpace="pre-line">
                                All images and trademarks © 2024 Athena Lee. All rights reserved.
                            </Text>
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works