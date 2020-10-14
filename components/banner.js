import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import styles from '../styles/banner.module.css'

export default function Banner({home, name}) {
  const homeBanner = (<>
    <img
      src="/images/profile.jpg"
      className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
      alt={name}
    />
    <h1 className={utilStyles.heading2Xl}>{name}</h1>
  </>)
  
    const secondaryBanner = (<>
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
    </>)

    return (<>
        { home ? homeBanner : secondaryBanner}
      </>)
}
