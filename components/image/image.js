import Image from 'next/image';
import styles from './image.module.scss';

export default function BlockImage(meta) {
  return (
    <>
    <figure className={styles.image}>
    <Image src={meta.url} alt={meta.alt} height={meta.height} width={meta.width} />
    <figcaption>{meta.caption}</figcaption>
    </figure>
    </>
    );
  }