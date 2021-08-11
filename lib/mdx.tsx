import fs from 'fs'
import matter from 'gray-matter'
import mdxPrism from 'mdx-prism'
import path from 'path'
import readingTime from 'reading-time'
import renderToString from 'next-mdx-remote/render-to-string'

import MDXComponents from '../components/MDXComponents'
import IBlogPost from '../interfaces/IBlogPost'
import {MdxRemote} from 'next-mdx-remote/types'
import IBlogPostPage from '../interfaces/IBlogPostPage'

const root = process.cwd()

export const getFiles = async (type: string): Promise<string[]> => {
	return fs.readdirSync(path.join(root, 'data', type))
}

interface IFile {
	mdxSource: MdxRemote.Source
	frontMatter: IBlogPostPage
}

export const getFileBySlug = async (
	type: string,
	slug: string
): Promise<IFile> => {
	const source = slug
		? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
		: fs.readFileSync(path.join(root, 'data', type, `${type}.mdx`), 'utf8')

	const {data, content} = matter(source)
	const mdxSource = await renderToString(content, {
		components: MDXComponents,
		mdxOptions: {
			remarkPlugins: [
				require('remark-autolink-headings'),
				require('remark-slug'),
				require('remark-code-titles'),
			],
			rehypePlugins: [mdxPrism],
		},
	})

	return {
		mdxSource,
		frontMatter: {
			wordCount: content.split(/\s+/gu).length,
			readingTime: readingTime(content),
			slug: slug || null,
			title: data.title,
			publishedAt: data.publishedAt,
			summary: data.summary,
		},
	}
}

export const getAllFilesFrontMatter = async (
	type: string
): Promise<IBlogPost[]> => {
	const files = fs.readdirSync(path.join(root, 'data', type))

	return files.reduce((allPosts, postSlug) => {
		const source = fs.readFileSync(
			path.join(root, 'data', type, postSlug),
			'utf8'
		)
		const {data} = matter(source)

		return [
			{
				...data,
				slug: postSlug.replace('.mdx', ''),
			},
			...allPosts,
		]
	}, [])
}
