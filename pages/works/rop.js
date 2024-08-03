import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"
import NoSsr from "../../components/no-ssr"
import OpticsSim from "../../components/optic-sim"

const Work = () => {
    return (
        <Layout title="Retinopathy of Prematurity simulation - John Lee">
            <Container>
                <Title>
                    Retinopathy of Prematurity simulation <Badge>2024</Badge>
                </Title>
                <P>
                    A VR simulation that helps ophthalmologists to diagnose and treat Retinopathy of Prematurity (ROP), a potentially blinding eye disorder that primarily affects premature infants. A PC version will also be available for those who don't have VR devices.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Deputy Primary Engineer</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Standalone VR/Windows/Mac</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Link</Meta>
                        <Link href="https://www.aao.org/newsroom/news-releases/detail/academy-fundamentalvr-collaborate-virtual-reality" isExternal>
                            Press releases (More to be announced) <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Features developed</Meta>
                        <span>Optics simulation, Mesh deformation, Virtual ophthalmoscope, retina VFX, Multi-user data sync</span>
                    </ListItem>
                    {/* <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href="https://www.fundamentalvr.com/blog/rop-simulation" isExternal>
                            Retinopathy of Prematurity simulation <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem> */}
                </List>

                <WorkImage src="/images/aao.png" alt="Rop" />
            </Container>
        </Layout>
    )
}

export default Work