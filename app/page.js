import localFont from 'next/font/local';
import Link from 'next/link';
import { siteTitle } from "./layout";
import styles from '../assets/scss/layout.module.scss';
import utils from '../assets/scss/utils.module.scss';
import BlockIcon from "../components/icon";

const interDisplay = localFont({
  src: [
    {
      path: '../assets/fonts/Inter-Display.woff2',
      weight: '400',
      style: 'normal',
    }
  ]
})


export const metadata = {
  title: siteTitle,
  description: 'Heia! I am from Northern Norway and I have always been passionate about design and coding.',
}

export default function Index() {
  const arrowIcon = "-->";

  return (
    <>
    <p className={utils.display + " " + interDisplay.className}>Heia! I am a designer and developer from Northern Norway <BlockIcon>🏔️</BlockIcon>, currently doing a master's degree in design at <a href="https://aho.no" target="_blank" rel="external">The Oslo School of Architecture and Design</a>, while working with <a href="https://seam.no" target="_blank" rel="external">SEAM</a> and <a href="https://aho.no" target="_blank" rel="external">OpenBridge</a>. I want to design digital products and services that matters, focusing on ethics and sustainability <BlockIcon>🌍</BlockIcon>.</p>

    <nav className={styles.menu2  + " " + interDisplay.className}>
      <ul>
        <li><Link href="/projects">See projects</Link> <span role="img" className={utils.icon}>{arrowIcon}</span></li>
        <li><Link href="/about">Read bio</Link> {arrowIcon}</li>
      </ul>
    </nav>
    </>
    );
  }