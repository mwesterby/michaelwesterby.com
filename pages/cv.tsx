import Layout, {siteTitle} from '../components/layout'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import cvStyles from '../styles/cv.module.css'

export default function CV() {

  return (
    <Layout home=''>
      <Head>
        <title>{siteTitle} | CV</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXL}>CV</h1>

        <h1 className={cvStyles.heading}>Experience</h1>
        <h2 className={cvStyles.subheadingXL}>IBM</h2>
          <h3 className={cvStyles.subheading}>Software Engineer - CICS</h3>
          <p className={cvStyles.date}>September 2020 - Present</p>
          <p className={cvStyles.body}>Software developer and tester for the <a href='https://www.ibm.com/uk-en/products/cics-transaction-server'>CICS Transaction Server </a>on z/OS.</p>
          <p className={cvStyles.language}>Java</p> {/* <p className={cvStyles.language}>Python</p> */}

          <h3 className={cvStyles.subheading}>Software Engineer - API Connect</h3>
          <p className={cvStyles.date}>September 2018 - September 2020</p>
          <p className={cvStyles.body}>Full stack developer in IBM Cloud, responsible for the software development behind IBM's API lifecycle management program, <a href='https://www.ibm.com/uk-en/cloud/api-connect'>API Connect</a>.</p>   
          <p className={cvStyles.language}>JavaScript</p> <p className={cvStyles.language}>Golang</p> <p className={cvStyles.language}>Apache Groovy</p>

        <h1 className={cvStyles.heading}>Education</h1>
        <h2 className={cvStyles.subheadingXL}>Newcastle University</h2>
          <h3 className={cvStyles.subheading}>MSc Computer Science, Distinction</h3>
          <p className={cvStyles.date}>September 2017 - August 2018</p>
          <p className={cvStyles.body}>Masters Project: A Peer and Self-Assessment Tool for Software Engineering Teams</p>
        <h2 className={cvStyles.subheadingXL}>Durham University</h2>
          <h3 className={cvStyles.subheading}>BSc Geography, First Class Honors</h3>
          <p className={cvStyles.date}>September 2014 - June 2017</p>
          <p className={cvStyles.body}>Dissertation: An Investigation into the use of Structure-from-Motion Photogrammetry in Reconstructing Flood Extents from Smartphone Imagery.</p>
        
        <h1 className={cvStyles.heading}>Technical Skills</h1>
        <h3 className={cvStyles.subheadingXL}>Languages</h3>
          <p className={cvStyles.body}>JavaScript, Golang, Java</p>
        <h3 className={cvStyles.subheadingXL}>Frameworks / Tools</h3>
          <p className={cvStyles.body}>React, Next.js, HTML/CSS</p>
        <h3 className={cvStyles.subheadingXL}>Devops / SCM</h3>
          <p className={cvStyles.body}>Docker, Kubernetes, Jenkins, Git, RTC</p>
      </section>
    </Layout>
  )
}

