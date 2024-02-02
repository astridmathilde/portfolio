import localFont from "next/font/local";
import styles from '../assets/scss/components/title.module.scss';

const interDisplay = localFont({
  src: [
    {
      path: '../assets/fonts/Inter-Display.woff2',
      weight: '400',
      style: 'normal',
    }
  ]
})

export default function Title({ children }) {
  return (
    <>
    <h2 className={styles.title + " " + interDisplay.className}>{ children }</h2>
    </>
    )
  }