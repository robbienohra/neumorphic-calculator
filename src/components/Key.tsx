import { Dispatch } from 'react';
import styles from '../styles/Key.module.scss';
import { Action, Button } from '../types';

export const Key = ({
  button: { key, numeric },
  dispatch,
}: {
  button: Button;
  dispatch: Dispatch<Action>;
}): JSX.Element => {
  return (
    <div onClick={() => dispatch({ key, numeric })} className={styles.default}>
      {key}
    </div>
  );
};

export const Zero = (): JSX.Element => {
  return <div className={styles.zero}>0</div>;
};
