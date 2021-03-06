import Big from 'big.js';
import { State } from './types';

export const initial: State = {
  display: '0',
  operand: '0',
  total: '0',
  operator: null,
};

/**
 * perform given operation
 *
 * @param {string} total - current cached total
 * @param {string} operand - current cached operand
 * @param {string} key - current key selected
 *
 * @returns {string} - operation result
 */
export function operate(total: string, operand: string, key: string): string {
  const x = new Big(total);
  const y = new Big(operand);

  switch (key) {
    case '+':
      return x.add(y).toString();
    default:
      return total;
  }
}

/**
 * handle case where user clicks a numeric key
 *
 * @param {State} s - current state
 * @param {string} key - current key clicked
 * @returns {State} - new state
 */
export function handleNumeric(s: State, key: string): State {
  const { operand, operator } = s;

  /**
   * no operator has been clicked yet
   * 0 -> 1 or 1 -> 12
   */
  if (!operator) {
    /**
     * null operand or null total case
     */

    /**
     * 0 -> 0
     */
    if (operand === '0' && key === '0') {
      return s;
    }

    /**
     * 0 -> 1
     */
    if (operand === '0' && key !== '0') {
      /**
       * replace 0 -> 1
       */
      return { ...s, operand: key, display: key };
    }

    /**
     * 1 -> 12
     */

    const res = s.operand + key;

    return {
      ...s,
      operand: res,
      display: res,
    };
  }

  /**
   * operator is present
   * operand not present
   * operator would have nullified it
   * 1 + -> 1 + 2
   * or 1 + 2 -> 1 + 23
   */

  const res = operand ? s.operand + key : key;

  return { ...s, operand: res, display: res };
}

/**
 * hangle case where user clicks on operator
 *
 * @param {State} s - current state
 * @param {string} key - operator
 * @returns {State} - new state
 */
export function handleOperator(s: State, key: string): State {
  const { operand, operator, total } = s;

  /**
   * 1 -> 1=
   */
  if (key === '=') {
    if (!operand) {
      return s;
    }

    /**
     * 1 + -> 1 + =
     * interpreted as 1 + 1
     */

    const res = operate(operand, operand, operator)


  }
  /**
   * operator not already present
   * 1 -> 1 +
   * set operator
   * nullify operand and set total as current operand
   *
   * sub-case
   * 1 -> 1 =
   */
  if (!operator) {
    return { ...s, operand: null, total: operand, operator: key };
  }

  /**
   * already an operator
   * 1 + -> 1 -
   * update operator if different from previoously set operator
   */
  if (key !== '=' && key !== operator) {
    return { ...s, operator: key };
  }

  /**
   * operand present but total not present
   * 1 -> 1 +
   * 1 moves from operand to total
   */

  if (operand && !total) {
    return { ...s, operator: key, total: operand, operand: null };
  }

  /**
   * cases
   * 1 + -> 1 + =
   * treat current total as operand and apply operator to self
   */
  if (key === '=') {
    return s;
  }

  /**
   * operand present and total present
   * 1 + 2 -> 1 + 2 + case
   * nullify operand
   */
  if (operand && total) {
    const res: string = operate(total, operand, key);

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
