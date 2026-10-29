const { add, subtract, multiply, divide } = require('../src/calc');

describe('calc', () => {
  test('add: 2 + 3 は 5 になる', () => {
    expect(add(2, 3)).toBe(5);
  });
});

test('subtract: 5 - 3 は 2 になる', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('multiply: 4 * 3 は 12 になる', () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test('divide: 6 / 3 は 2 になる', () => {
    expect(divide(6, 3)).toBe(2);
  });

  test('divide: 0で割るとエラーになる', () => {
    expect(() => divide(6, 0)).toThrow('0で割ることはできません');
  });