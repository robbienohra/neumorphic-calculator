import { State } from './types';

export const initial: State = {
  display: '0',
  operand: '0',
  total: '0',
  operator: null,
};

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
   * numeric key has been clicked
   * no operator has yet been clicked
   * 0 -> 1 or 1 -> 12
   */
  if (!operator) {
    if (operand === '0' && key === '0') {
      return s;
    }

    if (operand === '0' && key !== '0') {
      /**
       * replace 0 -> 1
       */
      return { ...s, operand: key, display: key };
    }

    return { ...s, operand: s.operand + key, display: s.operand + key };
  }

  /**
   * operator is present
   * 1 + -> 1 + 2
   * or 1 + 2 -> 1 + 23
   */

  if (!operand) {
    return { ...s, operand: key, display: key };
  }

  return { ...s, operand: s.operand + key, display: s.operand + key };
}
