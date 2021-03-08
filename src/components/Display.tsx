import styles from '../styles/Display.module.scss';

export const Display = ({ display }: { display: string }): JSX.Element => (
  <div id="display" className={styles.display} data-cy="display">
    {display}
  </div>
);
