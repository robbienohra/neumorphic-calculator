import Big from 'big.js';
import { Action, State } from './types';
import { handleNumeric } from './utils';

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

  const { operand, operator, total } = s;

  const { key, numeric } = a;

  if (numeric) {
    return handleNumeric(s, key);
  }

  /**
   * case where key is non-numeric
   */

  /**
   * initial click is an operator
   * nothing to do
   * null -> null +
   */
  if (!operand && !operator && !total) {
    return s;
  }

  /**
   * already an operator
   * 1 + -> 1 -
   * update operator
   */
  if (operator && key !== operator) {
    return { ...s, operator };
  }

  /**
   * operator has not been formerly selected
   */

  /**
   * operand present but total not present
   * 1 -> 1 +
   * 1 moves from operand to total
   */
  if (operand && !total) {
    return { ...s, operator: key, total: operand, operand: null };
  }

  /**
   * operand present and total present
   * 1 + 2 -> 1 + 2 + case
   * nullify operand
   */
  if (operand && total) {
    const x = new Big(total);
    const y = new Big(operand);

    const res = x.add(y);

    return {
      ...s,
      total: res.toString(),
      operand: null,
      operator,
      display: res.toString(),
    };
  }

  return s;
}
