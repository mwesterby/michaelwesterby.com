import Layout, {siteTitle} from '../components/layout'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import { getSortedProjectsData } from '../lib/projects'
import Date from '../components/date'

export default function Projects({ allProjectsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Projects</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXL}>Projects</h1>
        <ul className={utilStyles.list}>
        {allProjectsData.map(({ id, startDate, endDate, title, contentHtml }) => (
            <li className={utilStyles.listItemHeading} key={id}>
              {title}
              <br />
              <small className={utilStyles.lightText}>
               <Date dateString={startDate} dateFormat={'LLLL yyyy'} /> - <Date dateString={endDate} dateFormat={'LLLL yyyy'} />
              </small>
              <small>
              <ul className={utilStyles.list}>
                <li className={utilStyles.listItem} dangerouslySetInnerHTML={{ __html: contentHtml }} />
              </ul>
              </small>
            </li>
          ))}
          </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allProjectsData = await getSortedProjectsData()
  return {
    props: {
      allProjectsData
    }
  }
}