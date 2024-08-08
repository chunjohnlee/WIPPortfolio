import { Box, Container, Heading, SimpleGrid, Divider, Text } from "@chakra-ui/react"
import Section from "../components/section"
import { WorkGridItem } from "../components/grid-item"
import Layout from '../components/layouts/article'

import thumpAAO from "../public/images/aao.png"
import thumpUrolift from "../public/images/urolift.jpg"
import thumpVicarious from "../public/images/vicarious.png"
import thumpWalledCity from "../public/images/wallcity_protest.jpg"
import thumpFriendzy from "../public/images/FindingFriendzy.jpg"

const Works = () => {
    return (
        <Layout>
            <Container maxW="container.xl">
                <Heading as="h2" variant="page-title" mb={4} mt={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="rop" title="Retinopathy of Prematurity VR simulation" thumbnail={thumpAAO}>
                            <Box h='5px' />
                            <Text fontSize={8} whiteSpace="pre-line">
                                All images and trademarks © 2024 American Academy of Ophthalmology. All rights reserved.
                            </Text>
                        </WorkGridItem>
                    </Section>

                    <Section>
                        <WorkGridItem id="vicarious" title="Vicarious Surgical VR" thumbnail={thumpVicarious}>
                            <Box h='5px' />
                            <Text fontSize={8} whiteSpace="pre-line">
                                All images and trademarks © 2023 Vicarious Surgical Incorporated. All rights reserved.
                            </Text>
                        </WorkGridItem>
                    </Section>

                    <Section>
                        <WorkGridItem id="urolift" title="UroLift® Training system" thumbnail={thumpUrolift}>
                            <Box h='5px' />
                            <Text fontSize={8} whiteSpace="pre-line">
                                All images and trademarks © 2022 Teleflex Incorporated. All rights reserved.
                            </Text>
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.2}>
                    <Divider my={6} />

                    <Heading as="h2" variant="page-title" mb={4}>
                        Collaborations
                    </Heading>
                </Section>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.3}>
                        <WorkGridItem id="walled-city" title="Les Misérables in Kowloon Walled City VR" thumbnail={thumpWalledCity}>
                            <Box h='5px' />
                            <Text fontSize={8} whiteSpace="pre-line">
                                All images and trademarks © 2024 Athena Lee. All rights reserved.
                            </Text>
                        </WorkGridItem>
                    </Section>

                    <Section delay={0.3}>
                        <WorkGridItem id="finding-friendzy" title="Finding Friendzy" thumbnail={thumpFriendzy}>
                            <Box h='5px' />
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works