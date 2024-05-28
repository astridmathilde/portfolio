import styles from '../assets/scss/components/row.module.scss';

export default function BlockRow({children }) {
  return (
    <>
    <div className={styles.row}>
     { children }
     </div>
    </>
    );
  }