import {
	Box,
	Alert,
	Code,
	Heading,
	Link,
	Text,
	Divider,
	useColorMode,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'

const DocsHeading = (props) => (
	<Heading
		css={{
			scrollMarginTop: '100px',
			scrollSnapMargin: '100px', // Safari
			'&[id]': {
				pointerEvents: 'none',
			},
			'&[id]:before': {
				display: 'block',
				height: ' 6rem',
				marginTop: '-6rem',
				visibility: 'hidden',
				content: `""`,
			},
			'&[id]:hover a': { opacity: 1 },
		}}
		{...props}
		mb="1em"
		mt="2em"
	>
		<Box pointerEvents="auto">
			{props.children}
			{props.id && (
				<Box
					aria-label="anchor"
					as="a"
					color="blue.500"
					fontWeight="normal"
					outline="none"
					_focus={{
						opacity: 1,
						boxShadow: 'outline',
					}}
					opacity="0"
					ml="0.375rem"
					href={`#${props.id}`}
				>
					#
				</Box>
			)}
		</Box>
	</Heading>
)

type CustomLinkProps = {
	href: string
	children?: React.ReactNode
}

const CustomLink = (props: CustomLinkProps): JSX.Element => {
	const { colorMode } = useColorMode()
	const color = {
		light: 'blue.500',
		dark: 'blue.500',
	}

	const href = props.href
	const isInternalLink =
		href && (href.startsWith('/') || href.startsWith('#'))

	if (isInternalLink) {
		return (
			<NextLink href={href} passHref>
				<Link color={color[colorMode]} {...props} />
			</NextLink>
		)
	}

	return <Link color={color[colorMode]} isExternal {...props} />
}

const Quote = (props: { children?: React.ReactNode }): JSX.Element => {
	const { colorMode } = useColorMode()
	const bgColor = {
		light: 'blue.50',
		dark: 'blue.900',
	}

	return (
		<Alert
			mt={4}
			w="98%"
			bg={bgColor[colorMode]}
			variant="left-accent"
			status="info"
			css={{
				'> *:first-of-type': {
					marginTop: 0,
					marginLeft: 8,
				},
			}}
			{...props}
		/>
	)
}

const Hr = (): JSX.Element => {
	const { colorMode } = useColorMode()
	const borderColor = {
		light: 'gray.200',
		dark: 'gray.600',
	}

	return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />
}

const Heading1 = (props: { children?: React.ReactNode }): JSX.Element => {
	return <Heading as="h1" size="xl" my={4} {...props} />
}

const Heading2 = (props: { children?: React.ReactNode }): JSX.Element => {
	return <DocsHeading as="h2" size="lg" fontWeight="bold" {...props} />
}

const Heading3 = (props: { children?: React.ReactNode }): JSX.Element => {
	return <DocsHeading as="h3" size="md" fontWeight="bold" {...props} />
}

const Heading4 = (props: { children?: React.ReactNode }): JSX.Element => {
	return <DocsHeading as="h4" size="sm" fontWeight="bold" {...props} />
}

const Heading5 = (props: { children?: React.ReactNode }): JSX.Element => {
	return <DocsHeading as="h5" size="sm" fontWeight="bold" {...props} />
}

const Heading6 = (props: { children?: React.ReactNode }): JSX.Element => {
	return <DocsHeading as="h6" size="xs" fontWeight="bold" {...props} />
}

const InlineCode = (props: { children?: React.ReactNode }): JSX.Element => {
	return <Code colorScheme="gray" fontSize="0.84em" {...props} />
}

const Br = (props: { children?: React.ReactNode }): JSX.Element => {
	return <Box height="24px" {...props} />
}

const Paragraph = (props: { children?: React.ReactNode }): JSX.Element => {
	return <Text as="p" mt={0} lineHeight="tall" {...props} />
}

const UnorderedList = (props: { children?: React.ReactNode }): JSX.Element => {
	return <Box as="ul" pt={2} pl={4} ml={2} {...props} />
}

const OrderedList = (props: { children?: React.ReactNode }): JSX.Element => {
	return <Box as="ol" pt={2} pl={4} ml={2} {...props} />
}

const ListItem = (props: { children?: React.ReactNode }): JSX.Element => {
	return <Box as="li" pb={1} {...props} />
}

const ImageModal = (props: {
	children?: React.ReactNode
	alt: string
	src: string
	title?: string
}): JSX.Element => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { colorMode } = useColorMode()
	const colorSecondary = {
		light: 'gray.700',
		dark: 'gray.400',
	}
	const borderIcon = {
		light: 'gray.400',
		dark: 'gray.500',
	}

	return (
		<>
			<Image onClick={onOpen} alt="" {...props} />

			<Modal isOpen={isOpen} onClose={onClose} size="6xl">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<Text color={colorSecondary[colorMode]}>
							{props.alt}
						</Text>
					</ModalHeader>
					<ModalCloseButton color={borderIcon[colorMode]} />
					<ModalBody>
						<Image alt={props.alt} src={props.src} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

const MDXComponents = {
	h1: Heading1,
	h2: Heading2,
	h3: Heading3,
	h4: Heading4,
	h5: Heading5,
	h6: Heading6,
	inlineCode: InlineCode,
	br: Br,
	hr: Hr,
	a: CustomLink,
	p: Paragraph,
	ul: UnorderedList,
	ol: OrderedList,
	li: ListItem,
	blockquote: Quote,
	img: ImageModal,
}

export { CustomLink }
export default MDXComponents
