import styles from './Keypad.module.scss';

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
    <div className={styles.calculator}>
      {keys.map((row: string[]) => {
        return row.map((key) => <div key={key}>{key}</div>);
      })}
    </div>
  );
}
