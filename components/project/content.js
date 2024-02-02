import styles from '../../assets/scss/components/project/content.module.scss';

export default function ProjectContent({children }) {
  return (
    <>
    <div className={styles.content + " entry"}>
     { children }
     </div>
    </>
    );
  }