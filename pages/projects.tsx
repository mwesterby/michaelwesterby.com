/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Head from 'next/head'
import {
    Link,
    Text,
    Stack,
    Flex,
    Heading,
    useColorMode,
    Code
} from '@chakra-ui/react'

import Container from '../components/Container'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    const iconColor = {
        light: 'gray.600',
        dark: 'gray.300'
    }

    return (
        <>
            <Head>
                <title>Projects - Michael Westerby</title>
            </Head>
            <Container>
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
                        px={4}
                    >
                        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                            Projects
                        </Heading>
                        <Text color={colorSecondary[colorMode]}>Here is somewhere I will need to write a summary of what I want to talk about wth regards to the projects i've accomplished
                        </Text>
                        <Heading letterSpacing="tight" as="h1" mt={4} size="xl" fontWeight={700}>
                            Featured Projects
                        </Heading>
                        <ProjectCard
                            title="michaelwesterby.com"
                            href="https://github.com/mwesterby/michaelwesterby.com"
                            badges={['TypeScript', 'Next.js']}
                            src="/images/mw-favicon.png"
                            alt='michaelwesterby.com Icon'
                        >
                            This website! Starting from the Next.js starter template. Deployed using Vercel.
                        </ ProjectCard>
                        <ProjectCard
                            title="App Development with Swift"
                            href="https://github.com/mwesterby/app-development-with-swift"
                            badges={['Swift']}
                            src="/images/swift-icon.png"
                            alt='Swift icon'
                        >
                            My solutions to the labs and excercises in Apple's free <Link href="https://books.apple.com/gb/book/app-development-with-swift/id1465002990" isExternal color="blue.500">App Development with Swift</Link> textbook.
                        </ ProjectCard>
                        <ProjectCard
                            title="Project Reunite"
                            href="https://github.com/project-reunite/reunite"
                            badges={['JavaScript']}
                            src="/images/project-reunite-logo.png"
                            alt='Personal website logo'
                        >
                            Entry to IBM's Call for Code hackathon which placed 1st in the UK competition, and 5th out of 132 teams in the global contest. This was a mobile app to help reunite lost loved ones following a natural disasters.
                        </ProjectCard>
                        <ProjectCard
                            title="Sudoku Solver"
                            href="https://github.com/mwesterby/sudoku-solver"
                            badges={['Java', 'Maven']}
                            src="/images/sudoku.png"
                            alt='Sudoku'
                        >
                            A quick Sudoku solver I created one afternoon, solving Sudoku's in the same way I do.
                        </ProjectCard>
                        <Heading letterSpacing="tight" as="h2" mb={2} mt={4} size="xl" fontWeight={700}>
                            All Projects
                        </Heading>
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export default Projects