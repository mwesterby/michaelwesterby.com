import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({ postData }: {postData: {
  id: string;
  contentHtml: string;
  title: any;
  date: any;
}}) {
  return (
    <Layout home=''>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXL}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <div className={utilStyles.backTo}>
        <Link href="/posts">
          <a>← Back to posts</a>
        </Link>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

type Params = {
	params: {
		id: string
	}
}

export const getStaticProps = async ({params}: Params) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
