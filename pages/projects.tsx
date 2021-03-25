/* eslint-disable @typescript-eslint/no-redeclare */

import Head from 'next/head';
import { GetStaticProps } from 'next';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getProjects } from '../lib/projects';
import Date from '../components/date';

export type Project = {
  startDate: string,
  endDate: string,
  title: string,
  description: string,
  link: string
};

export type Projects = Project[];

function Project(project: Project) {
  const {
    startDate,
    endDate,
    title,
    description,
    link,
  } = project;

  return (
    <li className={utilStyles.listItem} key={title}>
      <div className={utilStyles.listItemHeading}><a className={utilStyles.colorInherit} href={link} target="_blank" rel="noreferrer">{title}</a></div>
      <small className={utilStyles.lightText}>
        <Date dateString={startDate} dateFormat="LLLL yyyy" />
        {' - '}
        {(endDate === 'Present') ? endDate : <Date dateString={endDate} dateFormat="LLLL yyyy" /> }
      </small>
      <small>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem} dangerouslySetInnerHTML={{ __html: description }} />
        </ul>
        <a href={link} target="_blank" rel="noreferrer">Code</a>
      </small>
    </li>
  );
}

export default function Projects({ allProjectsData } : { allProjectsData: Projects }) {
  return (
    <Layout>
      <Head>
        <title>
          {siteTitle}
          {' | Projects'}
        </title>
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
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allProjectsData = getProjects();

  return {
    props: {
      allProjectsData,
    },
  };
};
