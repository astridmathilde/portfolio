import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.scss';
import utils from '../../styles/utils.module.scss';

export const siteTitle = 'Astrid Mathilde Boberg';

export default function Layout({ children }) {
  return (
    <>
    <Head>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦄</text></svg>" />
    <meta name="description" content="Heia! I am from Northern Norway and I have always been passionate about design and coding. Currently I am a design student at The Oslo School of Architecture and Design while working with OpenBridge an open-source design system for better and safer user interfaces on ships, helping to reduce future carbon emissions in the ocean industry." />
    <meta name="og:title" content={siteTitle} />
    </Head>
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
    </>
    );
  }