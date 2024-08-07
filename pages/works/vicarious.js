import { Container, Badge, Link, List, UnorderedList, ListItem, Box, Text } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title="Vicarious Robot VR sim - John Lee">
            <Container maxW="container.xl">
                <Title>
                    Vicarious Robot VR sim <Badge>2023</Badge>
                </Title>
            </Container>

            <Container maxW="container.md" mt={3}>
                <P>
                    A VR training simulation that allows surgeons to practice on the Vicarious Surgical Robot, a minimally invasive surgical system that leverages human-like robots and VR to perform surgeries remotely.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Role</Meta>
                        <span>Engineer, R&D integration</span>
                    </ListItem>
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
                        <UnorderedList ml={10}>
                            <ListItem>soft tissue and suturing integration</ListItem>
                            <ListItem>robot control</ListItem>
                            <ListItem>IK of robot arms and the patient cart</ListItem>
                            <ListItem>in-VR stereoscopic video re-projection</ListItem>
                            <ListItem>optimization</ListItem>
                        </UnorderedList>
                    </ListItem>
                    {/* <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href="https://www.fundamentalvr.com/blog/rop-simulation" isExternal>
                            Retinopathy of Prematurity simulation <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem> */}
                </List>

                <WorkImage src="/images/vicarious.png" alt="Vicarious Robot">
                    Performing suturing with Vicarious robot.
                </WorkImage>
                <WorkImage src="/images/vicarious2.jpg" alt="Patient Cart">
                    Patient Cart connects with the patient and allows the robot entering the body through a single incision while the surgeon maintains control of the instrument arm. I developed an IK system where the rotation of the joints is calculated according to the position and rotation of the robot and its own movement constraints.
                </WorkImage>
                <WorkImage src="/images/vicarious3.jpg" alt="Surgeon Console">
                    This is where the surgeon sits to drive the robot. When the VR controllers are engaged to the console, the user can move the robot, its arms and camera with a high range of freedom.
                </WorkImage>
            </Container>
        </Layout>
    )
}

export default Work