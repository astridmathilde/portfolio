import Image from 'next/image';
import styles from '../assets/scss/components/image.module.scss';

export default function BlockImage(meta) {
  return (
    <>
    <figure className={styles.image + ' ' + meta.class}>
    <Image src={meta.url} alt={meta.alt} placeholder={meta.placeholder == 'false' ? 'empty' : 'blur'} priority={meta.priority == 'true' ? true : false} />
     {meta.caption ? (
        <figcaption> 
          {meta.caption}
        </figcaption>
      ) : (
        null
      )}
    </figure>
    </>
    );
  }