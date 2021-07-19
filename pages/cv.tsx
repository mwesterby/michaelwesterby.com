/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Divider
} from '@chakra-ui/react'

import Container from '../components/Container'
import EducationCard from '../components/EducationCard'

export default function CV() {

    const { colorMode } = useColorMode()
    const textColor = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    const borderColor = {
        light: 'gray.200',
        dark: 'gray.600'
    }


    return (
        <Container>
            <Head>
                <title>CV - Michael Westerby</title>
            </Head>
            <Stack
                    as="main"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                >
                <Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    maxWidth="700px"
                    w="100%"
                >
                    <Heading letterSpacing="tight" mb={2} ml={2} as="h1" size="2xl">
                        CV
                    </Heading>
                    <Heading letterSpacing="tight" mt={8} ml={2} size="lg" fontWeight={700} as="h2">
                        Experience
                    </Heading>


                    <Flex
                        align="center"
                        pt={4}
                        m={2}
                    >
                        <Stack>
                            <Heading
                                as="h4"
                                size="md"
                                fontWeight="bold"
                            >
                                IBM
                            </Heading>
                            <Flex
                                justifyContent="space-between"
                                flexDirection={["column", "row", "row"]}
                            >
                                <Flex flexDirection="column">
                                    <Text>Software Engineer - CICS</Text>
                                </Flex>
                                <Flex flexDirection="column">
                                    <Text fontStyle="italic" color="gray.600" fontSize="14px">
                                        September 2020 - Present
                                    </Text>
                                </Flex>
                            </Flex>
                            <Text color={textColor[colorMode]}>Software developer and tester for the CICS Transaction Server on z/OS.</Text>
                            <Flex
                                justifyContent="space-between"
                                flexDirection={["column", "row", "row"]}
                            >
                                <Flex flexDirection="column">
                                    <Text>Software Engineer - API Connect</Text>
                                </Flex>
                                <Flex flexDirection="column">
                                    <Text fontStyle="italic" color="gray.600" fontSize="14px">
                                        September 2018 - September 2020
                                    </Text>
                                </Flex>
                            </Flex>
                            <Text color={textColor[colorMode]}>Full stack developer in IBM Cloud, responsible for the software development behind IBM's API lifecycle management program, API Connect.</Text>
                        </Stack>
                    </Flex>
                    <Divider mt={6}/>
                    <Heading letterSpacing="tight" mt={8} ml={2} size="lg" fontWeight={700} as="h2">
                        Education
                    </Heading>
                    <EducationCard
                        uni="Newcastle University"
                        years="September 2017 - August 2018"
                        degree="MSc Computer Science"
                        badge='Distinction'
                    >
                        Masters Project: A Peer and Self-Assessment Tool for Software Engineering Teams. A tool which facilitates individuals in evaluating their own performance and skill development throughout a software engineering group project as well as appraising the skill development, contribution and performance of other team members.
                    </EducationCard>
                    <EducationCard
                        uni="Durham University"
                        years="September 2014 - June 2017"
                        degree="BSc Geography"
                        badge='First Class Honors'
                    >
                        Dissertation: An Investigation into the use of Structure-from-Motion Photogrammetry in Reconstructing Flood Extents from Smartphone Imagery.
                    </EducationCard>
                    <Divider mt={6}/>
                    <Heading letterSpacing="tight" mt={8} ml={2} size="lg" fontWeight={700} as="h2">
                        Technical Skills
                    </Heading>
                    <Flex
                        align="center"
                        pt={4}
                        m={2}
                    >
                        <Stack justifyContent='space-around'>
                        <Heading as="h4" size="md" fontWeight="bold">
                            Languages
                        </Heading>
                        <Text>JavaScript, Golang, Java</Text>

                        <Heading as="h4" size="md" fontWeight="bold">
                            Frameworks / Tools
                        </Heading>
                        <Text>React, Next.js, HTML/CSS</Text>

                        <Heading as="h4" size="md" fontWeight="bold">
                            Devops / SCM
                        </Heading>
                        <Text>Docker, Kubernetes, Jenkins, Git, RTC</Text>
                    </Stack>


                    </Flex>
                    

                </Flex>
                

            </Stack>

        </Container>



    )
}