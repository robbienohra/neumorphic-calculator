import { useReducer } from 'react';
import styles from '../styles/Calculator.module.scss';
import { Display } from './Display';
import Keypad from './Keypad';
import { keyReducer } from '../reducers';
import { initial } from '../utils';

/**
 * calculator component
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Calculator() {
  const [state, dispatch] = useReducer(keyReducer, initial);
  return (
    <div className={styles.calculator}>
      <Display
        display={
          state.operands.length === 1 ? state.operands[0] : state.operands[1]
        }
      />
      <Keypad />
    </div>
  );
}
