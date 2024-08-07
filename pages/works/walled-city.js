import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"
import NoSsr from "../../components/no-ssr"
import WallCity from "../../components/wallcity"

const Work = () => {
    return (
        <Layout title="Les Misérables in Kowloon Walled City - John Lee">
            <Container maxW="container.xl">
                <NoSsr>
                    <WallCity />
                </NoSsr>
                <Title>
                    Les Misérables in Kowloon Walled City VR <Badge>2024</Badge>
                </Title>
            </Container>

            <Container maxW="container.md" mt={3}>
                <P>
                    A VR immersive experience that takes you inside the 3D scan of a miniature model for a 360-degree immersive theatre design of the Kowloon Walled City, a once densely populated, ungoverned settlement in Hong Kong that was demolished in the early 1990s.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Sole engineer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Standalone VR</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Link</Meta>
                        <Link href="https://www.athenartportfolio.com/lminkwc" isExternal>
                            Original Artwork <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Features developed</Meta>
                        <span>Dynamic sky, gaze-assists movement, stylized shader</span>
                    </ListItem>
                    {/* <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href="https://www.fundamentalvr.com/blog/rop-simulation" isExternal>
                            Retinopathy of Prematurity simulation <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem> */}
                </List>

                <WorkImage src="/images/wallcity_night.jpg" alt="Walled city at night" />
                <WorkImage src="/images/wallcity_protest.jpg" alt="Walled city at protest" />
            </Container>
        </Layout>
    )
}

export default Work