import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title="vicarious">
            <Container>
                <Title>
                    Vicarious Robot VR sim <Badge>2023</Badge>
                </Title>
                <P>
                    A VR training simulation that allows surgeons to practice on the Vicarious Surgical Robot, a minimally invasive surgical system that leverages human-like robots and VR to perform surgeries remotely.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Tethered VR</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Link</Meta>
                        <Link href="https://www.technosundae.com/vicarious-surgical-vr" isExternal>
                            Learn more <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Features developed</Meta>
                        <span>soft tissue and suturing integration, robot control, IK of robot arms, in-VR stereoscopic video re-projection, optimization</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Engineer, R&D integration</span>
                    </ListItem>
                    {/* <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href="https://www.fundamentalvr.com/blog/rop-simulation" isExternal>
                            Retinopathy of Prematurity simulation <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem> */}
                </List>

                <WorkImage src="/images/vicarious.png" alt="Vicarious" />
            </Container>
        </Layout>
    )
}

export default Work