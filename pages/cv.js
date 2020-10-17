import Layout, {siteTitle} from '../components/layout'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import { getCV } from '../lib/cv'

export default function CV({cvData}) {
  const {
    contentHtml
  } = cvData

  console.log(contentHtml)
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | CV</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXL}>CV</h1>
        <div dangerouslySetInnerHTML={{ __html: cvData.contentHtml }} />
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const cvData = await getCV()
  return {
    props: {
      cvData
    }
  }
}
