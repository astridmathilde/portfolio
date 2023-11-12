import styles from '../styles/components/image-row.module.css';

export default function BlockImageRow({ children }) {
  return (
    <>
      <div className={ styles.image_row }>
        { children }
      </div>
    </>
  );
}