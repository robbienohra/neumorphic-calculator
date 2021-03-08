import styles from '../styles/Grid.module.scss';

/**
 *
 */
export default function Grid() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.item}>A</div>
        <div className={styles.item}>B</div>
        <div className={styles.item}>C</div>
      </div>
    </div>
  );
}
