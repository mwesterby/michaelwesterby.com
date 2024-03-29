import React from 'react'
import Head from 'next/head'
import { parseISO, format } from 'date-fns'
import {
	useColorMode,
	Heading,
	Text,
	Flex,
	Stack,
	Button,
	Avatar,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FiChevronLeft } from 'react-icons/fi'

import Container from '../components/Container'
import IBlogPostPage from '../interfaces/IBlogPostPage'

export default function BlogLayout({
	children,
	frontMatter,
}: {
	children: React.ReactNode
	frontMatter: IBlogPostPage
}): JSX.Element {
	const { colorMode } = useColorMode()
	const textColor = {
		light: 'gray.700',
		dark: 'gray.400',
	}

	return (
		<Container>
			<Head>
				<title>{frontMatter.title} - Blog - Michael Westerby</title>
			</Head>
			<Stack
				as="article"
				spacing={8}
				justifyContent="center"
				alignItems="flex-start"
				m="0 auto 4rem auto"
				maxWidth="700px"
				w="100%"
				px={2}
			>
				<Flex
					flexDirection="column"
					justifyContent="flex-start"
					alignItems="flex-start"
					maxWidth="700px"
					w="100%"
				>
					<Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
						{frontMatter.title}
					</Heading>
					<Flex
						justify="space-between"
						align={['initial', 'center']}
						direction={['column', 'row']}
						mt={2}
						w="100%"
						mb={4}
					>
						<Flex align="center">
							<Avatar
								size="xs"
								name="Michael Westeby"
								src="../images/profile.jpg"
								mr={2}
							/>
							<Text fontSize="sm" color={textColor[colorMode]}>
								{'Michael Westerby / '}
								{format(
									parseISO(frontMatter.publishedAt),
									'dd MMMM yyyy'
								)}
							</Text>
						</Flex>
						<Text
							fontSize="sm"
							color="gray.500"
							minWidth="100px"
							mt={[2, 0]}
						>
							{frontMatter.readingTime.text}
						</Text>
					</Flex>
				</Flex>
				{children}

				<NextLink href="/blog" passHref>
					<Button leftIcon={<FiChevronLeft />}>Back to posts</Button>
				</NextLink>
			</Stack>
		</Container>
	)
}
