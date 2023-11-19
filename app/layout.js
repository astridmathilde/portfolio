import Link from 'next/link';
import '../assets/scss/global.scss';
import styles from '../assets/scss/layout.module.scss';
import utils from '../assets/scss/utils.module.scss';

export const siteTitle = 'Astrid Mathilde Boberg';

export default function Layout({ children }) {
  return (
    <>
    <html lang="nb">
    <body>
    <header id={styles.site_header}>
    <h2 className={utils.screen_reader_text}>Menu</h2>
    <nav className={styles.site_navigation}>
    <ul>
    <li><Link href="/">Index</Link></li>
    <li><Link href="/projects">Projects</Link></li>
    <li><Link href="/about">Bio</Link></li>    </ul>
    </nav>

    <h1 className={utils.screen_reader_text}>{siteTitle}</h1>
    </header>
    <main>{children}</main>
    <footer id={styles.site_footer}>
    <ul className={styles.contact}>
    <h2 className={utils.screen_reader_text}>Contact</h2>
    <li>{siteTitle}</li>
    <li><a href="mailto:heia@astridmathilde.no" aria-label="Send email">heia@astridmathilde.no</a></li>
    <li><a href="https://instagram.com/astridmathildeb" target="_blank" rel="noreferrer nofollow">Instagram</a></li>
    <li><a href="https://www.linkedin.com/in/astridmathilde/" target="_blank" rel="noreferrer nofollow">LinkedIn</a></li>
    </ul>
    </footer>
    </body>
    </html>
    </>
    );
  }