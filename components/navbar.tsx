import Link from 'next/link';
import styles from '../styles/navbar.module.css';

function NavLink({ label, address }: { label: string, address: string }) {
  const home = label === 'Home';
  return (
    <div className={home ? '' : styles.navbarItem}>
      <Link href={address}>
        <a className={home ? styles.navbarHomeLink : styles.navbarLink}>{label}</a>
      </Link>
    </div>
  );
}

export default function Navbar({ home }: { home: string }) {
  return (
    <div className={styles.navbar}>
      <NavLink label="CV" address="/cv" />
      <NavLink label="Blog" address="/posts" />
      <NavLink label="Projects" address="/projects" />
      {home ? '' : <NavLink label="Home" address="/" />}
    </div>
  );
}
