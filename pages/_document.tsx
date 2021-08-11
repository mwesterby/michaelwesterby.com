import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

export default class MyDocument extends NextDocument {
	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head />
				<body>
					<ColorModeScript />
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
