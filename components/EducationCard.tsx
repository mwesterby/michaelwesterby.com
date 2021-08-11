import React from 'react'
import {
	useColorMode,
	Heading,
	Text,
	Flex,
	Stack,
	Badge,
} from '@chakra-ui/react'

const EducationCard = ({
	uni,
	years,
	degree,
	badge,
	children,
}: {
	uni: string
	years: string
	degree: string
	badge: string
	children: React.ReactNode
}): JSX.Element => {
	const { colorMode } = useColorMode()
	const colorSecondary = {
		light: 'gray.700',
		dark: 'gray.400',
	}

	return (
		<Flex align="center" pt={4} m={2}>
			<Stack>
				<Flex
					justifyContent="space-between"
					flexDirection={['column', 'row', 'row']}
				>
					<Flex flexDirection="column">
						<Heading as="h4" size="md" fontWeight="bold">
							{uni}
						</Heading>
						<Text>{degree}</Text>
					</Flex>
					<Flex flexDirection="column">
						<Text
							fontStyle="italic"
							color="gray.600"
							fontSize="14px"
						>
							{years}
						</Text>
						<Flex
							justifyContent={[
								'flex-start',
								'flex-end',
								'flex-end',
							]}
						>
							<Badge m={1}>{badge}</Badge>
						</Flex>
					</Flex>
				</Flex>
				<Text color={colorSecondary[colorMode]}>{children}</Text>
			</Stack>
		</Flex>
	)
}

export default EducationCard
