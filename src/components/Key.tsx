import { Dispatch, memo } from 'react';
import styles from '../styles/Key.module.scss';
import { Action, Button } from '../types';

export const Key = memo(
  ({
    button: { key, numeric },
    dispatch,
  }: {
    button: Button;
    dispatch: Dispatch<Action>;
  }): JSX.Element => {
    return (
      <div className={styles.button}>
        <button
          onClick={() => dispatch({ key, numeric })}
          className={styles.default}
          data-cy={key}
        >
          {key}
        </button>
      </div>
    );
  },
  () => true
);

export const Zero = ({
  dispatch,
}: {
  dispatch: Dispatch<Action>;
}): JSX.Element => {
  return (
    <div
      onClick={() => dispatch({ key: '0', numeric: true })}
      className={styles.zero}
    >
      0
    </div>
  );
};
