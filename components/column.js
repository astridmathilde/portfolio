import styles from '../assets/scss/components/column.module.scss';

export default function BlockColumn({children }) {
  return (
    <>
    <div className={styles.column}>
     { children }
     </div>
    </>
    );
  }