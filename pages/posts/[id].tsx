import Head from 'next/head';
import Link from 'next/link';
import { GetStaticPaths } from 'next';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { PostData } from '../posts';

export default function Post({ postData }: { postData: PostData }) {
  return (
    <Layout>
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
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

type Params = {
  params: {
    id: string
  }
};

export const getStaticProps = async ({ params }: Params) => {
  const postData: PostData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
