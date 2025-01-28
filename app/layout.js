import {Providers} from "./providers";
import Link from "next/link";
import localFont from 'next/font/local';
import '../assets/scss/global.scss';
import styles from '../assets/scss/layout.module.scss';
import Wrapper from './wrapper.js'
import LightSwitch from './light-switch.js'

const interDisplay = localFont({
  src: [
    {
      path: '../assets/fonts/Inter-Display.woff2',
      weight: '400',
      style: 'normal',
    }, 
    {
      path: '../assets/fonts/InterDisplay-Italic.woff2',
      weight: '400',
      style: 'italic',
    }, 

  ]
})

export const siteTitle = 'Astrid Mathilde';

export default function Layout({ children }) {
  return (
    <>
    <html lang="en" className={interDisplay.className + " dark"}>
    <Wrapper>
    <Providers>
    <header id={styles.header}>
    <h1 className={styles.site_title}><a href="/">Astrid Mathilde Boberg</a></h1>
    <nav className={styles.navigation}>
    <ul>
    <li key="work"><Link href="/work">Work</Link></li>
    <li key="resumee"><Link href="/about">About</Link></li>
    <li key="lightswitch"><LightSwitch /></li>
    </ul>
    </nav>
    </header>
    <main id={styles.content} className={styles.entry}>
    {children}
    </main>
    <footer id={styles.footer}>
    <address rel="author">© Astrid Mathilde Boberg</address>
    <nav className={styles.navigation}>
    <ul>
    <li key="now"><Link href="/now">Now</Link></li>
    <li key="colophon"><Link href="/colophon">Colophon</Link></li>
    </ul>
    </nav>
    </footer>
    </Providers>
    </Wrapper>
    </html>
    </>
    );
  }