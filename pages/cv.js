import Layout, {siteTitle} from '../components/layout'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import cvStyles from '../styles/cv.module.css'
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

        <h1>Experience</h1>
          <h2>IBM</h2>
          <h3 className={cvStyles.subheading}>Software Engineer - CICS</h3>
          <p className={cvStyles.date}>September 2020 - Present</p>
          <p>Software developer and tester for the <a href='https://www.ibm.com/uk-en/products/cics-transaction-server'>CICS Transaction Server </a>on z/OS.</p>
          
          <h3 className={cvStyles.subheading}>Software Engineer - API Connect</h3>
          <p className={cvStyles.date}>September 2018 - September 2020</p>
          <p>Full stack developer in IBM Cloud, responsible for the software development behind IBM's API lifecycle management program, <a href='https://www.ibm.com/uk-en/cloud/api-connect'>API Connect</a>.</p>        

        <h1>Education</h1>
          <h2>Newcastle University</h2>
          <h3 className={cvStyles.subheading}>MSc Computer Science, Distinction</h3>
          <p className={cvStyles.date}>September 2017 - August 2018</p>
          <p>Masters Project: A Peer and Self-Assessment Tool for Software Engineering Teams</p>

          <h2>Durham University</h2>
          <h3 className={cvStyles.subheading}>BSc Geography, First Class Honors</h3>
          <p className={cvStyles.date}>September 2014 - June 2017</p>
          <p>Dissertation: An Investigation into the use of Structure-from-Motion Photogrammetry in Reconstructing Flood Extents from Smartphone Imagery.</p>

        <h1>Technical Skills</h1>
          <h3 className={cvStyles.subheading}>Languages</h3>
          <p>JavaScript, Golang, Java</p>

          <h3 className={cvStyles.subheading}>Frameworks / Tools</h3>
          <p>React, Next.js, HTML/CSS</p>

          <h3 className={cvStyles.subheading}>Devops / SCM</h3>
          <p>Docker, Kubernetes, Jenkins, Git, Rational Team Concert</p>
        {/* <div dangerouslySetInnerHTML={{ __html: cvData.contentHtml }} /> */}
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
