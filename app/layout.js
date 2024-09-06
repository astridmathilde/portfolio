import Link from "next/link";
import localFont from 'next/font/local';
import '../assets/scss/global.scss';
import styles from '../assets/scss/layout.module.scss';
import Wrapper from './wrapper.js'

const interDisplay = localFont({
  src: [
    {
      path: '../assets/fonts/Inter-Display.woff2',
      weight: '400',
      style: 'normal',
    }
  ]
})

export const siteTitle = 'Astrid Mathilde Boberg';

export default function Layout({ children }) {
  return (
    <>
    <html lang="en" className={interDisplay.className}>
    <Wrapper>
    <header id={styles.header}>
    <h1 className={styles.site_title}><a href="/">{siteTitle}</a></h1>
    <nav className={styles.site_navigation}>
      <ul>
        <li key="work"><Link href="/">Work</Link></li>
        <li key="resumee"><Link href="resumee">Resumee</Link></li>
      </ul>
    </nav>
    </header>
    <main id={styles.content} className={styles.entry}>
    {children}
    </main>
    <footer id={styles.footer}>
    <address rel="author">© Astrid Mathilde Boberg</address>
    <Link href="colophon">Colophon</Link>
    </footer>
    </Wrapper>
    </html>
    </>
    );
  }