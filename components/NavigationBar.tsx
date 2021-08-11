import React from 'react'
import { useColorMode, Button, Flex, Box } from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import DarkModeSwitch from './DarkModeSwitch'
import { useRouter } from 'next/router'

const NavigationBarItem = ({ path, name }): JSX.Element => {
	const { colorMode } = useColorMode()
	const router = useRouter()

	const navHoverBg = {
		light: 'gray.100',
		dark: 'gray.700',
	}

	return (
		<NextLink href={path} passHref>
			<Button
				as="a"
				variant="ghost"
				p={[1, 2, 4]}
				mr={1}
				backgroundColor={
					router.pathname === path ? navHoverBg[colorMode] : null
				}
			>
				{name}
			</Button>
		</NextLink>
	)
}

const NavigationBar = (): JSX.Element => {
	const { colorMode } = useColorMode()

	const bgColor = {
		light: 'white',
		dark: '#171717',
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
				<NavigationBarItem path="/" name="Home" />
				<NavigationBarItem path="/projects" name="Projects" />
				<NavigationBarItem path="/blog" name="Blog" />
				<NavigationBarItem path="/cv" name="CV" />
			</Box>
			<DarkModeSwitch />
		</StickNav>
	)
}

export default NavigationBar
