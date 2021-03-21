import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export type PostData = {
  id: string;
  contentHtml: string;
  title: string;
  date: string;
};

export default function Posts({ allPostsData }: { allPostsData: PostData[] }) {
  return (
    <Layout>
      <Head>
        <title>
          {siteTitle}
          {' | Blog'}
        </title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingXL}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
