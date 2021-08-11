import hydrate from 'next-mdx-remote/hydrate'
import { getFiles, getFileBySlug } from '../../lib/mdx'
import { GetStaticPaths, GetStaticProps } from 'next'
import BlogLayout from '../../layouts/blog'
import MDXComponents from '../../components/MDXComponents'
import { MdxRemote } from 'next-mdx-remote/types'

import IBlogPostPage from '../../interfaces/IBlogPostPage'

export default function Blog({
	mdxSource,
	frontMatter,
}: {
	mdxSource: MdxRemote.Source
	frontMatter: IBlogPostPage
}): JSX.Element {
	const content = hydrate(mdxSource, {
		components: MDXComponents,
	})

	return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getFiles('blog')

	return {
		paths: posts.map((p) => ({
			params: {
				slug: p.replace(/\.mdx/, ''),
			},
		})),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const post = await getFileBySlug('blog', params.slug as string)

	return { props: post }
}
