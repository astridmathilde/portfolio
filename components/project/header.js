import styles from '../../assets/scss/components/project/header.module.scss';

export default function ProjectHeader({children }) {
  return (
    <>
    <header className={styles.header}>
     { children }
     </header>
    </>
    );
  }