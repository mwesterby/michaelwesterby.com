/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import {
	useColorMode,
	Heading,
	Text,
	Flex,
	Stack,
	Link,
	Divider,
} from '@chakra-ui/react'

import Container from '../components/Container'
import EducationCard from '../components/EducationCard'

export default function CV(): JSX.Element {
	const { colorMode } = useColorMode()
	const textColor = {
		light: 'gray.700',
		dark: 'gray.400',
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
					<Heading
						letterSpacing="tight"
						mb={2}
						ml={2}
						as="h1"
						size="2xl"
					>
						CV
					</Heading>
					<Heading
						letterSpacing="tight"
						mt={8}
						ml={2}
						size="lg"
						fontWeight={700}
						as="h2"
					>
						Experience
					</Heading>

					<Flex align="center" pt={4} m={2}>
						<Stack>
							<Heading as="h4" size="md" fontWeight="bold">
								IBM
							</Heading>
							<Flex
								justifyContent="space-between"
								flexDirection={['column', 'row', 'row']}
							>
								<Flex flexDirection="column">
									<Text>Software Engineer - CICS</Text>
								</Flex>
								<Flex flexDirection="column">
									<Text
										fontStyle="italic"
										color="gray.600"
										fontSize="14px"
									>
										September 2020 - Present
									</Text>
								</Flex>
							</Flex>
							<Text color={textColor[colorMode]}>
								Software Engineer in the CICS Modern Languages
								team, developing and testing support for Java
								and Node.js on the{' '}
								<Link
									href="https://www.ibm.com/uk-en/products/cics-transaction-server"
									isExternal
									color="blue.500"
								>
									CICS Transaction Server for z/OS
								</Link>
								.
							</Text>
							<Flex
								justifyContent="space-between"
								flexDirection={['column', 'row', 'row']}
								pt={5}
							>
								<Flex flexDirection="column">
									<Text>Software Engineer - API Connect</Text>
								</Flex>
								<Flex flexDirection="column">
									<Text
										fontStyle="italic"
										color="gray.600"
										fontSize="14px"
									>
										September 2018 - September 2020
									</Text>
								</Flex>
							</Flex>
							<Text color={textColor[colorMode]}>
								Full stack developer in IBM Cloud, responsible
								for the software development behind IBM's API
								lifecycle management program,{' '}
								<Link
									href="https://www.ibm.com/uk-en/cloud/api-connect"
									isExternal
									color="blue.500"
								>
									API Connect
								</Link>
								. Here I designed, implemented, and tested new
								features for the main product’s microservices,
								working mainly with Docker and Kubernetes, Go,
								JavaScript and Apache Groovy.
							</Text>
						</Stack>
					</Flex>
					<Divider mt={6} />
					<Heading
						letterSpacing="tight"
						mt={8}
						ml={2}
						size="lg"
						fontWeight={700}
						as="h2"
					>
						Education
					</Heading>
					<EducationCard
						uni="Newcastle University"
						years="September 2017 - August 2018"
						degree="MSc Computer Science"
						badge="Distinction"
					>
						<Text>Masters Project:</Text>A Peer and Self-Assessment
						Tool for Software Engineering Teams. This was a PHP
						web-based tool I created which allowed members of a
						software engineering group project to not only reflect
						on their own personal contribution and skill development
						throughout the project, but also that of their peers.
						This was then used to calculate weighted marks for each
						member in the group.
					</EducationCard>
					<EducationCard
						uni="Durham University"
						years="September 2014 - June 2017"
						degree="BSc Geography"
						badge="First Class Honors"
					>
						<Text>Dissertation:</Text>
						An Investigation into the use of Structure-from-Motion
						Photogrammetry in Reconstructing Flood Extents from
						Smartphone Imagery.
					</EducationCard>
					<Divider mt={6} />
					<Heading
						letterSpacing="tight"
						mt={8}
						ml={2}
						size="lg"
						fontWeight={700}
						as="h2"
					>
						Technical Skills
					</Heading>
					<Flex align="center" pt={4} m={2}>
						<Stack justifyContent="space-around">
							<Heading as="h4" size="md" fontWeight="bold">
								Languages
							</Heading>
							<Text color={textColor[colorMode]}>
								Java, Python, JavaScript, Go, Bash
							</Text>

							<Heading as="h4" size="md" fontWeight="bold">
								Frameworks / Tools
							</Heading>
							<Text color={textColor[colorMode]}>
								React, Next.js, HTML/CSS
							</Text>

							<Heading as="h4" size="md" fontWeight="bold">
								Devops / SCM
							</Heading>
							<Text color={textColor[colorMode]}>
								Docker, Kubernetes, Jenkins, Git, GitHub, RTC
							</Text>
						</Stack>
					</Flex>
				</Flex>
			</Stack>
		</Container>
	)
}
