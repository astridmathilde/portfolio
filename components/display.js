import localFont from 'next/font/local';
import styles from '../assets/scss/components/display.module.scss';

export default function BlockIcon({children}) {
  return (
    <>
    <p className={styles.display}>{children}</p>
    </>
  )
}