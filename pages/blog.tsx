import React, { useState } from 'react'
import Head from 'next/head'
import {
    Heading,
    Flex,
    Stack,
    Input,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react'

import Container from '../components/Container'
import {getAllFilesFrontMatter} from '../lib/mdx'
import BlogPost from '../components/BlogPost'

import { SearchIcon } from '@chakra-ui/icons'

import IBlogPost from '../interfaces/IBlogPost'
import { GetStaticProps } from 'next'

export default function Blog({posts}: {posts: IBlogPost[]}): JSX.Element {
    const [searchValue, setSearchValue] = useState('')

    const filteredBlogPosts = posts
        .sort(
            (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
        )
        .filter((frontMatter) => 
        frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()))

    return (
        <>
            <Head>
                <title>Blog - Michael Westerby</title>
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
                        <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
                            Blog
                        </Heading>
                        <InputGroup mb={4} mr={4} w="100%">
                            <Input
                                aria-label="Search by title"
                                placeholder="Search by title"
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                            <InputRightElement>
                                <SearchIcon color="gray.300"/>
                            </InputRightElement>
                        </InputGroup>
                        <Heading letterSpacing="tight" mb={4} as="h3" size="md">
                            {filteredBlogPosts.length !=1 ? filteredBlogPosts.length + ' Posts' : filteredBlogPosts.length + ' Post'} 
                        </Heading>
                        {!filteredBlogPosts.length && 'No posts found :('}
                        {filteredBlogPosts.map((frontMatter: JSX.IntrinsicAttributes & { title: string; publishedAt: string; summary: string; slug: string }) => <BlogPost key={frontMatter.title} {...frontMatter} />)}
                    </Flex>
                    
                </Stack>
            </Container>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllFilesFrontMatter('blog')
    return { props: { posts }}
}