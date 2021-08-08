/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Image,
  Link,
} from '@chakra-ui/react'

import Container from '../components/Container'

export default function Index(): JSX.Element {
  const colorMode = useColorMode().colorMode
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  return (
    <Container>
      <Head>
        <title>Home - Michael Westerby</title>
      </Head>
      <Stack
        as='main'
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        m='0 auto 4rem auto'
        maxWidth='700px'
        px={2}
      >
        <Image
                alignSelf="center"
                borderRadius="full"
                width='40%'
                src='images/profile.jpg'
                alt='profile picture'
          ></Image>
        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='700px'
        >
          <Heading mb={2} alignSelf="center">Hi, I'm Michael Westerby</Heading>
          <Text color={colorSecondary[colorMode]}>I'm a Software Engineer working at IBM, currently developing and testing the CICS Transaction Server for z/OS.</Text>

          <Text color={colorSecondary[colorMode]} mt={1}>I previously worked on API Connect in IBM for two years after graduating with a master's degree in Computer Science from Newcastle University. You can read more about me <Link href="/cv" color="blue.500">here</Link>.</Text>
        </Flex>
      </Stack>
    </Container>
  )
}
