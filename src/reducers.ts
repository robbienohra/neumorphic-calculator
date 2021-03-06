import { Action, State } from './types';
import { handleNumeric, handleOperator } from './utils';

/**
 * key reducer for numeric and operator keys
 *
 * @param {State} s - current calculator state
 * @param {Action} a - action indicating key clicked
 * @returns {State} - new state
 */
export function keyReducer(s: State, a: Action): State {
  /**
   * assume for the time being that a always means +
   * key may be numeric or an operatori
   */

  const { key, numeric } = a;

  if (numeric) {
    return handleNumeric(s, key);
  }

  return handleOperator(s, key);
}
