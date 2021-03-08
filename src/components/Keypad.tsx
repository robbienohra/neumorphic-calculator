import { Dispatch } from 'react';
import styles from '../styles/Keypad.module.scss';
import { Key, Zero } from './Key';
import { generateNumericKey, generateOperatorKey } from '../utils';
import { Action, Button } from '../types';

const topKeys: Button[] = ['C', '+/-', '%', '/'].map((operator) =>
  generateOperatorKey(operator)
);

const buttons: Button[][] = [
  { numbers: ['7', '8', '9'], operator: 'x' },
  { numbers: ['4', '5', '6'], operator: '-' },
  { numbers: ['1', '2', '3'], operator: '+' },
].map((row) => [
  ...row.numbers.map((num) => generateNumericKey(num)),
  generateOperatorKey(row.operator),
]);

/**
 *
 * @param {(value: Action) => void} dispatch - core reducer
 * @returns {JSX.Element}
 * @class
 */
export default function Keypad({
  dispatch,
}: {
  dispatch: Dispatch<Action>;
}): JSX.Element {
  return (
    <div className={styles.keypad}>
      {buttons.map((row: Button[]) => {
        return row.map((button: Button) => (
          <Key key={button.key} button={button} dispatch={dispatch} />
        ));
      })}
      <Zero />
      <Key button={{ key: '.', numeric: false }} dispatch={dispatch} />
      <Key button={{ key: '=', numeric: false }} dispatch={dispatch} />
    </div>
  );
}
