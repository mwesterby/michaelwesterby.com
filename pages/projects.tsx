/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Head from 'next/head'
import {Link, Text, Stack, Flex, Heading, useColorMode} from '@chakra-ui/react'

import Container from '../components/Container'
import ProjectCard from '../components/ProjectCard'
import FeaturedProjectCard from '../components/FeaturedProjectCard'

const Projects = (): JSX.Element => {
	const {colorMode} = useColorMode()

	const colorSecondary = {
		light: 'gray.700',
		dark: 'gray.400',
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
						<Heading
							letterSpacing="tight"
							mb={2}
							as="h1"
							size="2xl"
						>
							Projects
						</Heading>
						<Text color={colorSecondary[colorMode]}>
							Here is a list of projects I've completed over the
							years, either in my spare time, as part of my job,
							university, or from a course I've completed.
							Clicking on any will take you to their GitHub repo.
						</Text>
						<Heading
							letterSpacing="tight"
							as="h1"
							mt={4}
							size="xl"
							fontWeight={700}
						>
							Featured Projects
						</Heading>
						<FeaturedProjectCard
							title="michaelwesterby.com"
							href="https://github.com/mwesterby/michaelwesterby.com"
							badges={['TypeScript', 'Next.js', 'Chakra']}
							src="/images/mw-favicon.png"
							alt="michaelwesterby.com Icon"
						>
							My personal website! Built with Next.js and
							components from{' '}
							<Link
								href="https://chakra-ui.com/"
								isExternal
								color="blue.500"
							>
								Chakra UI
							</Link>
							. Deployed using Vercel.
						</FeaturedProjectCard>
						<FeaturedProjectCard
							title="App Development with Swift"
							href="https://github.com/mwesterby/app-development-with-swift"
							badges={['Swift', 'iOS', 'Xcode']}
							src="/images/swift-icon.png"
							alt="Swift icon"
						>
							My solutions to the labs and exercises in Apple's
							free{' '}
							<Link
								href="https://books.apple.com/gb/book/app-development-with-swift/id1465002990"
								isExternal
								color="blue.500"
							>
								App Development with Swift
							</Link>{' '}
							textbook.
						</FeaturedProjectCard>
						<FeaturedProjectCard
							title="Project Reunite"
							href="https://github.com/project-reunite/reunite"
							badges={['JavaScript', 'Node']}
							src="/images/project-reunite-logo.png"
							alt="Personal website logo"
						>
							Entry to IBM's Call for Code hackathon which placed
							1st in the UK competition, and 5th out of 132 teams
							in the global contest. This was a mobile app to help
							reunite lost loved ones following a natural
							disasters.
						</FeaturedProjectCard>
						<FeaturedProjectCard
							title="Sudoku Solver"
							href="https://github.com/mwesterby/sudoku-solver"
							badges={['Java', 'Maven']}
							src="/images/sudoku.png"
							alt="Sudoku"
						>
							A Sudoku solver I created to solve Sudoku's in the
							same way I do. By no means is this the most optimal!
							Just thought it would be a fun problem to solve with
							an Object Oriented approach.
						</FeaturedProjectCard>
						<Heading
							letterSpacing="tight"
							as="h2"
							mb={2}
							mt={4}
							size="xl"
							fontWeight={700}
						>
							Other Projects
						</Heading>
						<ProjectCard
							title="🎄 Advent of Code 2020"
							href="https://github.com/mwesterby/advent-of-code-2020"
						>
							My solutions to the first 12 days of the 2020
							Christmas themed{' '}
							<Link
								href="https://adventofcode.com/"
								isExternal
								color="blue.500"
							>
								Advent of Code
							</Link>{' '}
							challenges, written in JavaScript.
						</ProjectCard>
						<ProjectCard
							title="🛍 Node Rest Shop"
							href="https://github.com/mwesterby/node-rest-shop"
						>
							A Node.js tutorial project I used to build a simple
							RESTful API for a fictional shop, using express and
							mongoose.
						</ProjectCard>
						<ProjectCard
							title="✅ Learn Go with Tests"
							href="https://github.com/mwesterby/learn-go-with-tests"
						>
							My notes and work from a{' '}
							<Link
								href="https://quii.gitbook.io/learn-go-with-tests/"
								isExternal
								color="blue.500"
							>
								Golang tutorial
							</Link>{' '}
							which teaches the fundamentals of Go using a
							test-driven development approach.
						</ProjectCard>
						<ProjectCard
							title="⚽️ Football Teams Server"
							href="https://github.com/mwesterby/football-teams-server"
						>
							Node.js server allowing you to store football club
							data and perform CRUD operations on the exposed API.
						</ProjectCard>
						<ProjectCard
							title="⚽️ Football Teams Client"
							href="https://github.com/mwesterby/football-teams-client"
						>
							A React client for displaying football clubs and
							their status in the league, obtaining data from the{' '}
							<Link
								href="https://github.com/mwesterby/football-teams-server"
								isExternal
								color="blue.500"
							>
								Football Teams Server
							</Link>
							.
						</ProjectCard>
						<ProjectCard
							title="🐍 Complete Python Bootcamp"
							href="https://github.com/mwesterby/complete-python-bootcamp"
						>
							My notes and assessments from the 2021{' '}
							<Link
								href="https://www.udemy.com/course/complete-python-bootcamp/"
								isExternal
								color="blue.500"
							>
								Complete Python Bootcamp From Zero to Hero in
								Python
							</Link>{' '}
							course on Udemy.
						</ProjectCard>
						<ProjectCard
							title="🏔 Misty Mountains"
							href="https://github.com/mwesterby/misty-mountains"
						>
							A University CLI Java project to allow mountain
							climbers to collect and compare mountains they have
							ascended.
						</ProjectCard>
					</Flex>
				</Stack>
			</Container>
		</>
	)
}

export default Projects
