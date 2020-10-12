import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Footer from './footer'
import Navbar from './navbar'

const name = 'Michael Westerby'
export const siteTitle = name

export default function Layout({ children, home }) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Michael Westerby - Personal Website" />
          <meta name="og:title" content={siteTitle} />
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <img
                src="/images/profile.jpg"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <img
                    src="/images/profile.jpg"
                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}