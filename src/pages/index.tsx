import { useReducer } from 'react';
import { keyReducer } from '../reducers';
import { initial } from '../utils';
import { Display } from '../components/Display';

/**
 * app entry point
 *
 * @returns {JSX.Element} - entry point
 */
export default function App(): JSX.Element {
  const [state, dispatch] = useReducer(keyReducer, initial);
  return (
    <>
      <Display display={state.display} />
      <button
        onClick={() => {
          dispatch({ key: '0', numeric: true });
        }}
      >
        0
      </button>
      <button
        id="1"
        onClick={() => {
          dispatch({ key: '1', numeric: true });
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          dispatch({ key: '2', numeric: true });
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          dispatch({ key: '+', numeric: false });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ key: '=', numeric: false });
        }}
      >
        =
      </button>
    </>
  );
}
