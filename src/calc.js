// 加算・減算・乗算・除算を行う関数
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('0で割ることはできません');
  }
  return a / b;
}

function power(base, exponent) {
  return base ** exponent;
}

function remainder(a, b) {
  if (b === 0) {
    throw new Error('0で割ることはできません');
  }
  return a % b;
}

// 数値の配列を受け取り、平均値を返す関数
function average(numbers) {
  if (numbers.length <= 1) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

module.exports = { add, subtract, multiply, divide, power, remainder, average };