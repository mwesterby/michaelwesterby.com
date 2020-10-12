import Layout, {siteTitle} from '../components/layout'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'

export default function CV() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | CV</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXL}>CV</h1>
        <p>🚧 Page under construction 🚧</p>
      </section>
    </Layout>
  )
}