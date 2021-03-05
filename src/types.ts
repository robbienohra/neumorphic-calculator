/**
 * current calculator state
 * one of current total or value is null depending on state op operation
 */
export type State = {
  display: string;
  operand: string;
  operator: string;
  total: string;
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
