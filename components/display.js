import localFont from 'next/font/local';
import styles from '../assets/scss/components/display.module.scss';

const interDisplay = localFont({
  src: [
    {
      path: '../assets/fonts/Inter-Display.woff2',
      weight: '400',
      style: 'normal',
    }
  ]
})

export default function BlockIcon({children}) {
  return (
    <>
    <p className={styles.display + " " + interDisplay.className}>{children}</p>
    </>
  )
}