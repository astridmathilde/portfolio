import localFont from 'next/font/local';
import '../assets/scss/global.scss';
import styles from '../assets/scss/layout.module.scss';
import utils from '../assets/scss/utils.module.scss';

const inter = localFont({
  src: [
    {
      path: '../assets/fonts/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Inter-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
})

const interDisplay = localFont({
  src: [
    {
      path: '../assets/fonts/Inter-Display.woff2',
      weight: '400',
      style: 'normal',
    }
  ]
})

export const siteTitle = 'Astrid Mathilde Boberg – Designer & developer';

export default function Layout({ children } ) {
  return (
    <>
    <html lang="en" className={inter.className}>
    <body id={styles.wrapper}>
    <header id={styles.header}>
    <h1 className={utils.screen_reader_text}>{siteTitle}</h1>
    <h2 className={utils.screen_reader_text}>Menu</h2>
    </header>
    <main id={styles.content} className={styles.entry}>
    {children}
    </main>
    <footer id={styles.footer}>
    <h2 className={utils.screen_reader_text}>Contact</h2>
    <ul className={styles.contact + " " + interDisplay.className}>
    <li><a href="mailto:heia@astridmathilde.no" aria-label="Send email">heia@astridmathilde.no</a></li>
    <li><a href="https://github.com/astridmathilde" target="_blank" rel="noreferrer nofollow">Github</a></li>
    <li><a href="https://www.linkedin.com/in/astridmathilde/" target="_blank" rel="noreferrer nofollow">LinkedIn</a></li>
    </ul>
    </footer>
    </body>
    </html>
    </>
    );
  }