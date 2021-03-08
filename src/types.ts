/**
 * current calculator state
 * one of current total or value is null depending on state op operation
 */

export type State = {
  operands: Array<string>;
  operators: Array<string>;
};

/**
 * action to be dispatched by current button
 */
export type Action = {
  /**
   * key's value
   */
  key: string;
  /**
   * indicates if key is numeric or an operation
   */
  numeric: boolean;
};

export type Button = {
  key: string;
  numeric: boolean;
};
