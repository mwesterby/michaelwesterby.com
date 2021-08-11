import React from 'react'
import NextLink from 'next/link'
import { useColorMode, Heading, Text, Flex, Box, Link } from '@chakra-ui/react'
import { parseISO, format } from 'date-fns'

const BlogPost = ({
	title,
	publishedAt,
	summary,
	slug,
}: {
	title: string
	publishedAt: string
	summary: string
	slug: string
}): JSX.Element => {
	const { colorMode } = useColorMode()
	const secondaryTextColor = {
		light: 'gray.700',
		dark: 'gray.400',
	}

	const borderColor = {
		light: 'gray.200',
		dark: 'gray.600',
	}

	return (
		<>
			<NextLink href={`blog/${slug}`} passHref>
				<Link w="100%" _hover={{ textDecoration: 'none' }}>
					<Box
						display="block"
						width="100%"
						border="1px solid"
						borderColor={borderColor[colorMode]}
						borderRadius={4}
						p={4}
					>
						<Flex
							width="100%"
							align="flex-start"
							justifyContent="space-between"
							flexDirection={['column', 'row']}
						>
							<Flex
								flexDirection="column"
								align="flex-start"
								justifyContent="start"
								width="100%"
							>
								<Heading
									size="md"
									as="h3"
									mb={1}
									fontWeight="medium"
								>
									{title}
								</Heading>
							</Flex>

							<Text
								color="gray.500"
								minWidth="140px"
								textAlign={['left', 'right']}
								mb={[4, 0]}
							>
								{format(parseISO(publishedAt), 'dd MMMM yyyy')}
							</Text>
						</Flex>
						<Text color={secondaryTextColor[colorMode]}>
							{summary}
						</Text>
					</Box>
				</Link>
			</NextLink>
			<Box mb={5}></Box>
		</>
	)
}

export default BlogPost
