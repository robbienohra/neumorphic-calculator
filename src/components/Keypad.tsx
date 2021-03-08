import styles from '../styles/Keypad.module.scss';
import { Key, Zero } from './Key';
import { generateNumericKey, generateOperatorKey } from '../utils';
import { Button } from '../types';

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
 *  Numeric keypad
 *
 * @param root0
 * @param root0.dispatch
 * @returns {JSX.Element} - numeric keypad component
 * @class - functional constructor
 */
export default function Keypad({ dispatch }): JSX.Element {
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
