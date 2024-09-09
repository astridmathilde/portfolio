import styles from '../assets/scss/components/row.module.scss';

export default function BlockRow({align, children}) {
  return (
    <>
    <div className={styles.row} style={{alignItems: align}}>
     { children }
     </div>
    </>
    );
  }