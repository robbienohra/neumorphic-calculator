import styles from '../styles/Keypad.module.scss';
import { Key, Zero } from './Key';

const keys: string[][] = [
  ['7', '8', '9', '+'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
];

/**
 *  Numeric keypad
 *
 * @returns {JSX.Element} - numeric keypad component
 * @class - functional constructor
 */
export default function Keypad(): JSX.Element {
  return (
    <div className={styles.keypad}>
      {keys.map((row: string[]) => {
        return row.map((key) => <Key key={key} val={key} />);
      })}
      <Zero />
      <Key key="." val="." />
      <Key key="=" val="=" />
    </div>
  );
}
