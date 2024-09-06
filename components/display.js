import localFont from 'next/font/local';
import styles from '../assets/scss/components/display.module.scss';

export default function BlockIcon({children}) {
  return (
    <>
    <div className={styles.display}>
    <p>{children}</p>
    </div>
    </>
  )
}