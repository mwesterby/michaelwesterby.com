import styles from './navbar.module.css'
import Link from 'next/link'

function NavLink({label, address}) {
  return (
    <div className={styles.navbarItem}>
      <Link href={address}>
        <a className={styles.navbarLink}>{label}</a>
      </Link>
    </div>
  )
}

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavLink label='Home' address='/'/>
      <NavLink label='Blog' address='/posts'/>
      <NavLink label='CV' address='/cv'/>
      <NavLink label='Projects' address='/projects'/>
    </div>
  )
}