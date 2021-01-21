import Link from 'next/link'
import styles from '../../styles/Header.module.css'

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.logoContainer}>
      <img src="/logo-img.png" alt="Collectif Béranger" className={styles.spinningLogo} />
      <img src="/logo-txt.png" alt="Collectif Béranger" />
    </div>
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <a>Accueil</a>
          </Link>
        </li>
        <li>
          <Link href="/collectif">
            <a>Les parents</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Actualités</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)