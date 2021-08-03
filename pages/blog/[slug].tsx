import hydrate from 'next-mdx-remote/hydrate'
import { getFiles, getFileBySlug } from '../../lib/mdx'
import { GetStaticPaths, GetStaticProps } from 'next'
import BlogLayout from '../../layouts/blog'
import MDXComponents from '../../components/MDXComponents'

export default function Blog({mdxSource, frontMatter}): JSX.Element {
    const content = hydrate(mdxSource, {
        components: MDXComponents
    })

    return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getFiles('blog')

    return {
        paths: posts.map((p) => ({
            params: {
                slug: p.replace(/\.mdx/, '')
            }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = await getFileBySlug('blog', params.slug)

    return { props: post }
}

