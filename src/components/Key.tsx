import styles from '../styles/Key.module.scss';

export const Key = ({ val }: { val: string }): JSX.Element => {
  return <div className={styles.default}>{val}</div>;
};

export const Zero = (): JSX.Element => {
  return <div className={styles.zero}>0</div>;
};
