import React from 'react'
import {useColorMode, Button, Flex, Box} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import DarkModeSwitch from './DarkModeSwitch'
import {useRouter} from 'next/router'

const NavigationBar = (): JSX.Element => {
	const {colorMode} = useColorMode()
	const router = useRouter()

	const bgColor = {
		light: 'white',
		dark: '#171717',
	}

	const navHoverBg = {
		light: 'gray.100',
		dark: 'gray.700',
	}

	const StickNav = styled(Flex)`
		position: sticky;
		z-index: 10;
		top: 0;
		backdrop-filter: saturate(180%) blur(20px);
		transition: height 0.5s, line-height 0.5s;
	`

	return (
		<StickNav
			flexDirection="row"
			justifyContent="space-between"
			alignItems="center"
			maxWidth="800px"
			minWidth="356px"
			width="100%"
			bg={bgColor[colorMode]}
			as="nav"
			px={[2, 6, 6]}
			py={2}
			mt={8}
			mb={[0, 0, 8]}
			mx="auto"
		>
			<Box>
				<NextLink href="/" passHref>
					<Button
						as="a"
						variant="ghost"
						p={[1, 2, 4]}
						mr={1}
						backgroundColor={
							router.pathname === '/'
								? navHoverBg[colorMode]
								: null
						}
					>
						Home
					</Button>
				</NextLink>
				<NextLink href="/projects" passHref>
					<Button
						as="a"
						variant="ghost"
						p={[1, 2, 4]}
						mr={1}
						backgroundColor={
							router.pathname === '/projects'
								? navHoverBg[colorMode]
								: null
						}
					>
						Projects
					</Button>
				</NextLink>
				<NextLink href="/blog" passHref>
					<Button
						as="a"
						variant="ghost"
						p={[1, 2, 4]}
						mr={1}
						backgroundColor={
							router.pathname === '/blog'
								? navHoverBg[colorMode]
								: null
						}
					>
						Blog
					</Button>
				</NextLink>
				<NextLink href="/cv" passHref>
					<Button
						as="a"
						variant="ghost"
						p={[1, 2, 4]}
						backgroundColor={
							router.pathname === '/cv'
								? navHoverBg[colorMode]
								: null
						}
					>
						CV
					</Button>
				</NextLink>
			</Box>
			<DarkModeSwitch />
		</StickNav>
	)
}

export default NavigationBar
