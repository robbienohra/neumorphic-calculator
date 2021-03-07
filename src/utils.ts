import Big from 'big.js';
import { State } from './types';

export const initial: State = {
  operands: ['0'],
  operators: [],
};

/**
 * perform given operation
 *
 * @param {Array<string>} operands - operand values
 * @param {string} operator - current operator selected
 *
 * @returns {string} - operation result
 */
export function operate(operands: Array<string>, operator: string): string {
  const x = new Big(operands[0]);
  const y = new Big(operands[1]);
  /**
   * case equals
   */

  switch (operator) {
    case '+':
      return x.add(y).toString();
    default:
      return x.add(y).toString();
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
  const { operands, operators } = s;

  if (operands.length === 1) {
    switch (operators.length) {
      case 0:
        /**
         * [0] -> [1]
         * [1] -> [12]
         */

        if (operands[0] === '0') {
          return {
            ...s,
            operands: [key],
          };
        }

        return {
          ...s,
          operands: [operands[0] + key],
        };
      case 1:
        return {
          ...s,
          operands: [...operands, key],
        };
      default:
        return s;
    }
  }

  /**
   * operator case is 1 (guaranteed?)
   * 2 operand case
   * [1,0] -> [1, 2]
   * [1,2] -> [1,23]
   */

  if (operands[1] === '0') {
    return {
      ...s,
      operands: [...operands, key],
    };
  }

  return {
    ...s,
    operands: [...operands, operands[1] + key],
  };
}

/**
 * hangle case where user clicks on operator
 *
 * @param {State} s - current state
 * @param {string} key - operator
 * @returns {State} - new state
 */
export function handleOperator(s: State, key: string): State {
  const { operands, operators } = s;

  if (key === '=') {
    switch (operands.length) {
      case 1:
        switch (operators.length) {
          case 0:
            /**
             * [1] -> [1]
             */
            return s;
          case 1:
            /**
             * [1] [+] -> [1, 1 + 1] [+,=]
             * cache current operand as first operand
             * perform operation on self
             */
            return {
              operators: [...operators, '='],
              operands: [
                operands[0],
                operate([operands[0], operands[0]], operators[0]),
              ],
            };
          default:
            return s;
        }
      case 2:
        /**
         * [1, 2]  [+, =] -> [1, 2 +1]
         */
        if (operators[1] === '=') {
          return {
            ...s,
            operands: [operands[0], operate(operands, operators[0])],
          };
        }
        /**
         * [1, 2] [+] -> [3] []
         */
        return {
          operands: [operate(operands, operators[0])],
          operators: [],
        };
      default:
        return s;
    }
  }

  /**
   * key not equal to =
   */

  switch (operators.length) {
    case 0:
      /**
       * operand length will be 1 in this case
       * [1] [] -> [1] [+]
       * 2 operands without an existing operator would not occur
       */
      return {
        ...s,
        operators: [key],
      };

    case 1:
      /**
       * if an operator already exists
       */
      switch (operands.length) {
        case 1:
          /**
           * [1] [+] -> [1] [-]
           * replace with new operator
           */
          return {
            ...s,
            operands: [key],
          };
        case 2:
          /**
           * incoming +
           * [1, 2] [+] -> [3] [+]
           * case of 1 + 2 +
           */
          return {
            ...s,
            operands: [operate(operands, key).toString()],
            operators,
          };
        default:
          return s;
      }
    case 2:
      /**
       * [+, =] example
       * will always be associated with two operands
       * [1, 2] [+,=] -> [2] [+]
       */
      return { operands: [operands[1]], operators: [key] };
    default:
      return s;
  }
}
