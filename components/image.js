import Image from 'next/image';
import styles from '../assets/scss/components/image.module.scss';

export default function BlockImage(meta) {
  return (
    <>
    <figure className={styles.image}>
    <Image src={meta.url} alt={meta.alt} />
    <figcaption>{meta.caption}</figcaption>
    </figure>
    </>
    );
  }