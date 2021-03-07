import { Key } from '../types';

/**
 * generate numeric key values
 *
 * @returns {Array<string>} - numeric key values
 */
function range(): Array<Key> {
  const res = [];

  for (let i = 0; i < 10; i += 1) {
    res.push({ key: i.toString(), val: i.toString() });
  }

  return res;
}

/**
 *  Numeric keypad
 *
 * @returns {JSX.Element} - numeric keypad component
 * @constructor - functional constructor
 */
export default function Keypad(): JSX.Element {
  return (
    <div>
      {range().map((k) => {
        return <div key={k.key}>{k.value}</div>;
      })}
    </div>
  );
}
