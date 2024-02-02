import Link from "next/link";
import styles from '../../assets/scss/components/project/nav.module.scss';


export default function NavProject(nav) {
  const arrowRight = "-->";
  const arrowLeft = "<--";

  return (
    <>
    <nav className={styles.nav}>
    <ul>
    <li className={styles.prev}><Link href={process.cwd() + "/" + nav.prev}>{arrowLeft} Previous project</Link></li>
    <li className={styles.next}><Link href={process.cwd() + "/" + nav.next}>Next project {arrowRight}</Link></li>
    </ul>
    </nav>
    </>
    );
  }