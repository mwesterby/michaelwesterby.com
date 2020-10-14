import styles from '../styles/navbar.module.css'
import Link from 'next/link'

function NavLink({label, address}) {
  const home = label === 'Home'
  return (
    <div className={home ? "" : styles.navbarItem}>
      <Link href={address}>
        <a className={home ? styles.navbarHomeLink : styles.navbarLink}>{label}</a>
      </Link>
    </div>
  )
}

export default function Navbar({home}) {
  return (
    <div className={styles.navbar}>
      <NavLink label='Contact' address='/contact'/>
      <NavLink label='Blog' address='/posts'/>
      <NavLink label='CV' address='/cv'/>
      <NavLink label='Projects' address='/projects'/>
      {home ? "" : <NavLink label='Home' address='/'/>}
    </div>
  )
}