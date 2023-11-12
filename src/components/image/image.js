import Image from 'next/image';
import styles from './image.module.css';

export default function BlockImage() {
  const meta = {
    url: '/images/astrid-og-theia.jpg',
    width: 2268,
    height: 1814,
    alt: 'Placeholder',
    caption: 'Placeholder',
    
  }
  
  return (
    <>
    <figure className={styles.image}>
    <Image src={meta.url} alt={meta.alt} height={meta.height} width={meta.width} />
    <figcaption>{meta.caption}</figcaption>
    </figure>
    </>
    );
  }