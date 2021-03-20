import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Footer from './footer'
import Navbar from './navbar'
import Banner from './banner'

const name = 'Michael Westerby'
export const siteTitle = name

export default function Layout({ children, home='' }: {children: React.ReactNode, home?: string}) {
  return (
    <>
      <Navbar home={home}/>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Michael Westerby - Personal Website" />
          <meta name="og:title" content={siteTitle} />
        </Head>
        <header className={styles.header}>
          <Banner home={home} name={name}/>
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}