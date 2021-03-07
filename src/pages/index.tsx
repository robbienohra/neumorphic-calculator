import { useReducer } from 'react';
import { keyReducer } from '../reducers';
import { initial } from '../utils';
import { Display } from '../components/Display';
import Keypad from '../components/Keypad';

/**
 * app entry point
 *
 * @returns {JSX.Element} - entry point
 */
export default function App(): JSX.Element {
  const [state, dispatch] = useReducer(keyReducer, initial);

  return (
    <>
      <Display
        display={
          state.operands.length === 1 ? state.operands[0] : state.operands[1]
        }
      />
      <Keypad />
    </>
  );
}
