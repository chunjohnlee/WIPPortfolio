import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title="Finding Friendzy - John Lee">
            <Container maxW="container.xl">
                <Title>
                    Finding Friendzy <Badge>2021</Badge>
                </Title>
            </Container>

            <Container maxW="container.md" mt={3}>
                <P>
                    A submission for Global Game Jam 2021 where the theme is "Lost and Found" and was made under 24 hours. It is a simple puzzle game that sets in a place where it's most easy to lose things - a night club. The player has to find their friend in the crowd, avoid the bouncers and bring them home safely.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Developer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/WebGL</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Link</Meta>
                        <Link href="https://blackjlc.itch.io/finding-friendzy" isExternal>
                            itch.io page <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Features developed</Meta>
                        <span>Animation, 2D rigging, Character Movement, Drunkness sim</span>
                    </ListItem>
                    {/* <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href="https://www.fundamentalvr.com/blog/rop-simulation" isExternal>
                            Retinopathy of Prematurity simulation <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem> */}
                </List>

                <WorkImage src="/images/drunkness.gif" alt="Drunkness">
                    Self-adjusted drunkness(difficulty level). The more you drink the harder it is to control the character.
                </WorkImage>
                <WorkImage src="/images/friendzy-toilet.png" alt="Toilet" />
            </Container>
        </Layout>
    )
}

export default Work