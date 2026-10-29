const { add, subtract, multiply, divide, power, remainder, average } = require('../src/calc');

describe('calc', () => {
  test('add: 2 + 3 は 5 になる', () => {
    expect(add(2, 3)).toBe(5);
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

  test('power: 2の3乗は8になる', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('remainder: 7 % 3は 1 になる', () => {
    expect(remainder(7, 3)).toBe(1);
  });
  
  test('remainder: 0で割るとエラーになる', () => {
    expect(() => remainder(7, 0)).toThrow('0で割ることはできません');
  });

  test('average: 要素が複数あり割り切れる場合、[2, 4, 6] の平均は 4 になる', () => {
    expect(average([2, 4, 6])).toBe(4);
  });

  test('average: 要素が1つだけの場合、[10] の平均は 10 になる', () => {
    expect(average([10])).toBe(10);
  });

  test('average: 要素が複数あり割り切れない場合、[1, 2, 3, 4] の平均は 2.5 になる', () => {
    expect(average([1, 2, 3, 4])).toBe(2.5);
  });
  
});