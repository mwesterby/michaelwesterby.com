import Layout, {siteTitle} from '../components/layout'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import { getSortedProjectsData } from '../lib/projects'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export type Project = {
  id: string,
  startDate: string,
  endDate: string,
  title: string,
  contentHtml: string,
  link: string
}

type Projects = Project[];

function Project (project: Project) {
  const { 
    id,
    startDate,
    endDate,
    title,
    contentHtml,
    link
  } = project

  return (
    <li className={utilStyles.listItem} key={id}>
      <div className={utilStyles.listItemHeading}><a className={utilStyles.colorInherit} href={link} target="_blank">{title}</a></div>
      <small className={utilStyles.lightText}>
        <Date dateString={startDate} dateFormat={'LLLL yyyy'} /> - {(endDate == 'Present') ? endDate : <Date dateString={endDate} dateFormat={'LLLL yyyy'} /> }
      </small>
      <small>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem} dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </ul>
        <a href={link} target="_blank">Code</a>
      </small>
    </li>
  )
}


export default function Projects({ allProjectsData } : {allProjectsData: Projects}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Projects</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXL}>Projects</h1>
        <ul className={utilStyles.list}>
        {allProjectsData.map((project) => (
            Project(project)
          ))}
          </ul>
      </section>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  const allProjectsData = await getSortedProjectsData()
  return {
    props: {
      allProjectsData
    }
  }
}
