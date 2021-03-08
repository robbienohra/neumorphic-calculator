import { Reducer, useReducer } from 'react';
import styles from '../styles/Calculator.module.scss';
import { Display } from './Display';
import Keypad from './Keypad';
import { keyReducer } from '../reducers';
import { initial } from '../utils';
import { Action, State } from '../types';


/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Calculator() {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    keyReducer,
    initial
  );
  return (
    <div className={styles.calculator}>
      <Display
        display={
          state.operands.length === 1 ? state.operands[0] : state.operands[1]
        }
      />
      <Keypad dispatch={dispatch} />
    </div>
  );
}
