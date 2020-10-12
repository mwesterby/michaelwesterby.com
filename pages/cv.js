import Layout from '../components/layout'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'

export default function CV() {
  return (
    <Layout>
      <Head>
        <title>CV</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXK}>CV</h1>
      </article>
    </Layout>
  )
}