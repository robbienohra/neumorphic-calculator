import { keyReducer } from '../src/reducers';
import { initial } from '../src/utils';

describe('numeric', () => {
  it('initial click', () => {
    expect(keyReducer(initial, { key: '0', numeric: true })).toEqual({
      display: '0',
      operand: '0',
      total: '0',
      operator: null,
    });
  });
});

// describe('operator', () => {
//   it('degenerate operator', () => {
//     expect(keyReducer(initial, { key: '+', numeric: false })).toEqual(initial);
//   });
// });
