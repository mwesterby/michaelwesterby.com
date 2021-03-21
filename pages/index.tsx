/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home="home">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Michael! a Software Engineer working at IBM,currently developing and testing the CICS Transaction Server for z/OS.</p>
        <p>I previously worked on API Connect in IBM for two years after graduating with a master's degree in Computer Science from Newcastle University. You can read more about me <Link href="/cv">here</Link>.</p>
      </section>
    </Layout>
  );
}
