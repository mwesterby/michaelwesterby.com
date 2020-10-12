import Layout, {siteTitle} from '../components/layout'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Projects</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXL}>Projects</h1>
        <p>🚧 Page under construction 🚧</p>
      </section>
    </Layout>
  )
}